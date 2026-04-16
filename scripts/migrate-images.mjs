/**
 * Image Migration Script
 * Downloads all readdy.ai images, uploads to S3, and replaces URLs in source files.
 *
 * Usage:
 *   AWS_ACCESS_KEY_ID=xxx AWS_SECRET_ACCESS_KEY=yyy node scripts/migrate-images.mjs
 *   -- or configure ~/.aws/credentials via `aws configure` first --
 *   node scripts/migrate-images.mjs
 */

import { S3Client, HeadObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import https from 'https';
import http from 'http';
import crypto from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Load .env ────────────────────────────────────────────────────────────────

const envPath = join(ROOT, '.env');
if (existsSync(envPath)) {
  readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, ...rest] = line.split('=');
    if (key && rest.length && !key.startsWith('#')) {
      process.env[key.trim()] = rest.join('=').trim();
    }
  });
}

const BUCKET = process.env.AWS_S3_BUCKET_NAME || 'virtual-cto';
const REGION = process.env.AWS_REGION || 'ap-south-1';
const S3_PREFIX = 'assets/images';
const S3_BASE_URL = `https://${BUCKET}.s3.${REGION}.amazonaws.com/${S3_PREFIX}`;
const TMP_DIR = join(ROOT, '_tmp_images');

// ─── S3 Client ────────────────────────────────────────────────────────────────

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getFilename(imageUrl) {
  const parsed = new URL(imageUrl);
  const seq = parsed.searchParams.get('seq');
  if (seq) {
    return seq.replace(/[^a-zA-Z0-9-_]/g, '-') + '.jpg';
  }
  const hash = crypto.createHash('md5').update(imageUrl).digest('hex').slice(0, 12);
  return `image-${hash}.jpg`;
}

function downloadImage(imageUrl, destPath) {
  return new Promise((resolve, reject) => {
    const protocol = imageUrl.startsWith('https') ? https : http;
    const file = { chunks: [] };

    const request = (url) => {
      protocol.get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          request(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const buffer = Buffer.concat(chunks);
          writeFileSync(destPath, buffer);
          resolve(destPath);
        });
        res.on('error', reject);
      }).on('error', reject);
    };

    request(imageUrl);
  });
}

async function s3FileExists(key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }));
    return true;
  } catch {
    return false;
  }
}

async function uploadToS3(localPath, key, filename) {
  const body = readFileSync(localPath);
  await s3.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: body,
    ContentType: 'image/jpeg',
  }));
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Step 1: Find all unique readdy.ai URLs in source files
  console.log('🔍 Scanning source files for readdy.ai URLs...');
  const grepOutput = execSync(
    `grep -r "readdy.ai" --include="*.tsx" --include="*.ts" -rh .`,
    { cwd: ROOT }
  ).toString();

  const urlRegex = /https:\/\/readdy\.ai\/api\/search-image\?[^'"\s)]+/g;
  const allUrls = [...new Set(grepOutput.match(urlRegex) || [])];
  console.log(`Found ${allUrls.length} unique readdy.ai image URLs\n`);

  if (allUrls.length === 0) {
    console.log('No readdy.ai URLs found. Nothing to do.');
    return;
  }

  // Step 2: Create temp directory
  mkdirSync(TMP_DIR, { recursive: true });

  const urlMap = {}; // old URL -> new S3 URL
  const errors = [];

  // Step 3: Download and upload each image
  for (let i = 0; i < allUrls.length; i++) {
    const imageUrl = allUrls[i];
    const filename = getFilename(imageUrl);
    const s3Key = `${S3_PREFIX}/${filename}`;
    const s3Url = `${S3_BASE_URL}/${filename}`;
    const localPath = join(TMP_DIR, filename);

    process.stdout.write(`[${String(i + 1).padStart(2)}/${allUrls.length}] ${filename} ... `);

    try {
      // Skip if already uploaded
      const alreadyUploaded = await s3FileExists(s3Key);
      if (alreadyUploaded) {
        process.stdout.write('already on S3, skipping\n');
      } else {
        // Download only if not already in tmp dir
        if (!existsSync(localPath)) {
          await downloadImage(imageUrl, localPath);
          process.stdout.write('downloaded ... ');
        } else {
          process.stdout.write('cached ... ');
        }

        // Upload
        await uploadToS3(localPath, s3Key, filename);
        process.stdout.write('uploaded ✓\n');

        // Cleanup local file
        rmSync(localPath, { force: true });
      }

      urlMap[imageUrl] = s3Url;
    } catch (err) {
      process.stdout.write(`ERROR: ${err.message}\n`);
      errors.push({ url: imageUrl, error: err.message });
      // Still map it so we can replace URLs that did succeed
    }
  }

  // Step 4: Replace URLs in all source files
  console.log('\n📝 Replacing URLs in source files...');
  const files = execSync(
    `grep -rl "readdy.ai" --include="*.tsx" --include="*.ts" .`,
    { cwd: ROOT }
  ).toString().trim().split('\n').filter(Boolean);

  let totalReplacements = 0;
  for (const relFile of files) {
    const absFile = join(ROOT, relFile.replace(/^\.\//, ''));
    let content = readFileSync(absFile, 'utf8');
    let changed = false;

    for (const [oldUrl, newUrl] of Object.entries(urlMap)) {
      if (content.includes(oldUrl)) {
        content = content.split(oldUrl).join(newUrl);
        changed = true;
        totalReplacements++;
      }
    }

    if (changed) {
      writeFileSync(absFile, content, 'utf8');
      console.log(`  ✓ Updated: ${relFile}`);
    }
  }

  // Step 5: Save URL mapping for reference
  const mappingPath = join(ROOT, 'scripts', 'image-url-mapping.json');
  writeFileSync(mappingPath, JSON.stringify(urlMap, null, 2), 'utf8');

  // Step 6: Cleanup temp dir
  if (existsSync(TMP_DIR)) {
    rmSync(TMP_DIR, { recursive: true, force: true });
  }

  // Summary
  console.log('\n─────────────────────────────────────────');
  console.log(`✅ Done!`);
  console.log(`   Images processed : ${allUrls.length}`);
  console.log(`   URL replacements : ${totalReplacements}`);
  console.log(`   Files updated    : ${files.filter(f => f).length}`);
  if (errors.length > 0) {
    console.log(`   Errors           : ${errors.length}`);
    errors.forEach(e => console.log(`     - ${e.url.slice(0, 80)}...`));
  }
  console.log(`   Mapping saved to : scripts/image-url-mapping.json`);
}

main().catch((err) => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
