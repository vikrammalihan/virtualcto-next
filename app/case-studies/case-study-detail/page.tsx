'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';

function CaseStudyContent() {
  const searchParams = useSearchParams();
  const studyId = searchParams.get('id') || '1';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      id: '1',
      title: 'FinTech Scale-Up - Nigeria',
      subtitle: 'Scaling Payment Processing from 10K to 1M+ Daily Transactions',
      industry: 'FinTech',
      region: 'Africa',
      date: '2024',
      duration: '18 months',
      client: 'Leading Payment Processing Startup',
      heroImage: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-detail-fintech-hero-001.jpg',
      overview: 'A rapidly growing payment processing startup in Nigeria faced critical infrastructure challenges as they experienced exponential user growth. The existing system struggled to handle increasing transaction volumes, threatening business continuity and customer trust.',
      challenge: {
        description: 'The startup was processing 10,000 daily transactions but needed to scale to handle over 1 million transactions per day. The existing monolithic architecture was causing frequent downtime, slow processing times, and compliance concerns. The team lacked the technical leadership to architect a scalable solution while maintaining PCI-DSS compliance.',
        painPoints: [
          'System downtime during peak hours affecting customer trust',
          'Slow transaction processing leading to customer complaints',
          'Inability to meet PCI-DSS Level 1 compliance requirements',
          'Database bottlenecks causing cascading failures',
          'High infrastructure costs with poor performance',
          'Lack of real-time fraud detection capabilities'
        ]
      },
      solution: {
        description: 'As Fractional CTO, I led a comprehensive technology transformation over 18 months, focusing on architecture redesign, team building, and operational excellence.',
        approach: [
          {
            phase: 'Phase 1: Assessment & Planning (Months 1-2)',
            activities: [
              'Conducted comprehensive technical audit of existing infrastructure',
              'Identified critical bottlenecks and security vulnerabilities',
              'Designed microservices architecture with event-driven processing',
              'Created detailed migration roadmap with zero-downtime strategy',
              'Established PCI-DSS compliance framework'
            ]
          },
          {
            phase: 'Phase 2: Foundation Building (Months 3-6)',
            activities: [
              'Implemented core microservices for payment processing',
              'Set up Kubernetes cluster for container orchestration',
              'Built event streaming infrastructure with Apache Kafka',
              'Established CI/CD pipelines for automated deployments',
              'Implemented comprehensive monitoring and alerting'
            ]
          },
          {
            phase: 'Phase 3: Migration & Scaling (Months 7-12)',
            activities: [
              'Executed phased migration from monolith to microservices',
              'Implemented real-time fraud detection using machine learning',
              'Built automated compliance monitoring system',
              'Optimized database performance with sharding and caching',
              'Conducted load testing and performance optimization'
            ]
          },
          {
            phase: 'Phase 4: Optimization & Growth (Months 13-18)',
            activities: [
              'Achieved PCI-DSS Level 1 certification',
              'Implemented advanced analytics and reporting',
              'Built disaster recovery and business continuity systems',
              'Established technical documentation and knowledge base',
              'Trained internal team for ongoing operations'
            ]
          }
        ],
        technologies: [
          { name: 'AWS', purpose: 'Cloud Infrastructure' },
          { name: 'Kubernetes', purpose: 'Container Orchestration' },
          { name: 'Node.js', purpose: 'Backend Services' },
          { name: 'PostgreSQL', purpose: 'Primary Database' },
          { name: 'Redis', purpose: 'Caching & Session Management' },
          { name: 'Apache Kafka', purpose: 'Event Streaming' },
          { name: 'Terraform', purpose: 'Infrastructure as Code' },
          { name: 'Prometheus', purpose: 'Monitoring' },
          { name: 'Grafana', purpose: 'Visualization' }
        ]
      },
      results: {
        metrics: [
          { label: 'Transaction Volume', value: '100x Increase', description: 'From 10K to 1M+ daily transactions' },
          { label: 'System Uptime', value: '99.99%', description: 'Achieved and maintained consistently' },
          { label: 'Monthly Processing', value: '$50M+', description: 'Total transaction value processed' },
          { label: 'Processing Cost', value: '40% Reduction', description: 'Infrastructure cost optimization' },
          { label: 'Response Time', value: '<200ms', description: 'Average API response time' },
          { label: 'Compliance', value: 'PCI-DSS L1', description: 'Highest level certification achieved' }
        ],
        businessImpact: [
          'Enabled expansion to 3 new African markets',
          'Increased customer base from 50K to 500K+ users',
          'Reduced customer support tickets by 65%',
          'Improved customer satisfaction score from 3.2 to 4.7/5',
          'Attracted $15M Series B funding round',
          'Established market leadership position in Nigeria'
        ],
        testimonial: {
          quote: 'The transformation was remarkable. We went from constant firefighting to confidently scaling our business. The fractional CTO model gave us enterprise-level expertise at a fraction of the cost of a full-time executive.',
          author: 'CEO & Co-Founder',
          company: 'Payment Processing Startup'
        }
      },
      images: [
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-detail-fintech-img1-001.jpg',
          caption: 'Real-time transaction monitoring dashboard'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-detail-fintech-img2-001.jpg',
          caption: 'Microservices architecture design'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-detail-fintech-img3-001.jpg',
          caption: 'Engineering team collaboration'
        }
      ],
      keyTakeaways: [
        'Fractional CTO services provide enterprise-level expertise without full-time executive costs',
        'Microservices architecture enables independent scaling of critical components',
        'Event-driven processing handles high-volume transactions efficiently',
        'Compliance can be achieved alongside rapid growth with proper planning',
        'Investing in monitoring and observability prevents costly downtime',
        'Phased migration strategies minimize risk during major transformations'
      ]
    },
    {
      id: '2',
      title: 'HealthTech Platform - India',
      subtitle: 'Building HIPAA-Compliant Telemedicine Platform for 500+ Hospitals',
      industry: 'HealthTech',
      region: 'India',
      date: '2024',
      duration: '12 months',
      client: 'Telemedicine Platform Provider',
      heroImage: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-cto-002.jpg',
      overview: 'A telemedicine platform needed to rapidly scale to serve hundreds of hospitals across India while ensuring HIPAA compliance and integrating AI-powered diagnostic tools.',
      challenge: {
        description: 'The platform needed to handle sensitive patient data across 500+ hospitals while maintaining strict HIPAA compliance. The existing infrastructure lacked proper security measures, and the team needed guidance on implementing AI diagnostics and video consultation systems.',
        painPoints: [
          'Inadequate security measures for patient data',
          'No clear path to HIPAA compliance',
          'Poor video quality affecting consultations',
          'Lack of AI diagnostic capabilities',
          'Scalability concerns with growing hospital network',
          'Integration challenges with existing hospital systems'
        ]
      },
      solution: {
        description: 'Led the development of a HIPAA-compliant cloud infrastructure with end-to-end encryption, AI diagnostics integration, and scalable video consultation system.',
        approach: [
          {
            phase: 'Phase 1: Security & Compliance (Months 1-3)',
            activities: [
              'Implemented end-to-end encryption for all patient data',
              'Built HIPAA-compliant cloud infrastructure on Azure',
              'Established access control and audit logging systems',
              'Created comprehensive security policies and procedures',
              'Conducted security training for development team'
            ]
          },
          {
            phase: 'Phase 2: Core Platform (Months 4-7)',
            activities: [
              'Built scalable video consultation system using WebRTC',
              'Integrated AI diagnostic tools using TensorFlow',
              'Developed electronic health records (EHR) system',
              'Implemented real-time appointment scheduling',
              'Created mobile apps for patients and doctors'
            ]
          },
          {
            phase: 'Phase 3: Integration & Scale (Months 8-10)',
            activities: [
              'Integrated with existing hospital management systems',
              'Built APIs for third-party integrations',
              'Implemented automated backup and disaster recovery',
              'Optimized performance for high concurrent users',
              'Conducted extensive security audits'
            ]
          },
          {
            phase: 'Phase 4: Launch & Growth (Months 11-12)',
            activities: [
              'Achieved HIPAA compliance certification',
              'Onboarded 500+ hospitals across India',
              'Trained hospital staff on platform usage',
              'Established 24/7 technical support system',
              'Implemented continuous monitoring and improvement'
            ]
          }
        ],
        technologies: [
          { name: 'Azure', purpose: 'Cloud Infrastructure' },
          { name: 'Python', purpose: 'Backend Services' },
          { name: 'TensorFlow', purpose: 'AI Diagnostics' },
          { name: 'MongoDB', purpose: 'Database' },
          { name: 'WebRTC', purpose: 'Video Consultations' },
          { name: 'Docker', purpose: 'Containerization' },
          { name: 'React Native', purpose: 'Mobile Apps' },
          { name: 'Redis', purpose: 'Caching' }
        ]
      },
      results: {
        metrics: [
          { label: 'Hospitals Onboarded', value: '500+', description: 'Across major Indian cities' },
          { label: 'Patients Served', value: '2M+', description: 'Total consultations completed' },
          { label: 'Cost Reduction', value: '40%', description: 'For hospital operations' },
          { label: 'Patient Satisfaction', value: '95%', description: 'Average rating' },
          { label: 'Video Quality', value: '1080p', description: 'HD consultations' },
          { label: 'Compliance', value: 'HIPAA', description: 'Full certification achieved' }
        ],
        businessImpact: [
          'Enabled healthcare access in rural areas',
          'Reduced patient wait times by 70%',
          'Increased doctor productivity by 50%',
          'Secured $20M Series A funding',
          'Expanded to 15 Indian states',
          'Recognized as top HealthTech platform in India'
        ],
        testimonial: {
          quote: 'The platform transformed how we deliver healthcare. The fractional CTO brought expertise we couldn\'t afford full-time and helped us achieve HIPAA compliance while scaling rapidly.',
          author: 'Chief Medical Officer',
          company: 'Telemedicine Platform'
        }
      },
      images: [
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-health-002.jpg',
          caption: 'Video consultation interface'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-health-002.jpg',
          caption: 'AI-powered diagnostic tools'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-health-002.jpg',
          caption: 'Electronic health records system'
        }
      ],
      keyTakeaways: [
        'HIPAA compliance requires comprehensive security from day one',
        'AI diagnostics can significantly improve healthcare outcomes',
        'Video quality is critical for effective telemedicine',
        'Integration with existing systems is key to hospital adoption',
        'Mobile-first approach increases patient engagement',
        'Continuous monitoring ensures data security and compliance'
      ]
    },
    {
      id: '3',
      title: 'EdTech Expansion - Middle East',
      subtitle: 'Scaling Learning Management System to 100K+ Concurrent Users Across 15 Countries',
      industry: 'EdTech',
      region: 'Middle East',
      date: '2023',
      duration: '15 months',
      client: 'Regional Learning Platform Provider',
      heroImage: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-edtech-003.jpg',
      overview: 'A fast-growing EdTech company in the Middle East needed to expand its learning management system across 15 countries, supporting multiple languages and enabling real-time collaboration for hundreds of thousands of simultaneous learners.',
      challenge: {
        description: 'The existing LMS was built as a single-region monolith with no internationalisation support. With a mandate to launch across 15 countries in under 18 months, the team faced severe latency issues, no multi-language capability, and no real-time collaboration tooling.',
        painPoints: [
          'High latency for users outside the home region',
          'No multi-language or RTL text support',
          'Platform crashes under concurrent load above 5K users',
          'No real-time collaboration features for classrooms',
          'Content delivery too slow for video-heavy courses',
          'No adaptive learning or personalisation engine'
        ]
      },
      solution: {
        description: 'As Fractional CTO, I designed a globally distributed architecture with multi-region deployments, CDN-first content delivery, and a real-time collaboration layer supporting 8 languages.',
        approach: [
          {
            phase: 'Phase 1: Architecture Design (Months 1-3)',
            activities: [
              'Conducted latency and load analysis across target regions',
              'Designed multi-region GCP deployment strategy',
              'Planned CDN integration for video and static assets',
              'Defined internationalisation and RTL support requirements',
              'Created capacity model for 100K+ concurrent users'
            ]
          },
          {
            phase: 'Phase 2: Core Infrastructure (Months 4-8)',
            activities: [
              'Deployed multi-region Kubernetes clusters on GCP',
              'Integrated Cloudflare CDN for global content delivery',
              'Built GraphQL API layer replacing legacy REST endpoints',
              'Implemented WebSocket-based real-time classroom collaboration',
              'Developed i18n framework supporting 8 languages including Arabic RTL'
            ]
          },
          {
            phase: 'Phase 3: Adaptive Learning & Scale (Months 9-13)',
            activities: [
              'Built adaptive learning algorithm using Elasticsearch user data',
              'Implemented course recommendation engine',
              'Conducted load testing simulating 120K concurrent users',
              'Tuned database query performance with read replicas',
              'Set up real-time analytics dashboards for educators'
            ]
          },
          {
            phase: 'Phase 4: Launch & Expansion (Months 14-15)',
            activities: [
              'Rolled out platform to all 15 countries sequentially',
              'Trained regional teams on platform operations',
              'Established SLA monitoring and incident response processes',
              'Delivered knowledge transfer documentation',
              'Achieved 95% student satisfaction score at full scale'
            ]
          }
        ],
        technologies: [
          { name: 'GCP', purpose: 'Cloud Infrastructure' },
          { name: 'React', purpose: 'Frontend' },
          { name: 'GraphQL', purpose: 'API Layer' },
          { name: 'Elasticsearch', purpose: 'Search & Recommendations' },
          { name: 'WebSocket', purpose: 'Real-time Collaboration' },
          { name: 'Terraform', purpose: 'Infrastructure as Code' },
          { name: 'Cloudflare', purpose: 'CDN & Edge' },
          { name: 'Redis', purpose: 'Session & Caching' }
        ]
      },
      results: {
        metrics: [
          { label: 'Countries Launched', value: '15', description: 'Across Middle East & North Africa' },
          { label: 'Concurrent Users', value: '100K+', description: 'Sustained peak load handled' },
          { label: 'Student Satisfaction', value: '95%', description: 'Average platform rating' },
          { label: 'Languages Supported', value: '8', description: 'Including Arabic RTL' },
          { label: 'Engagement Increase', value: '60%', description: 'Course completion rate uplift' },
          { label: 'Latency Reduction', value: '70%', description: 'Average page load improvement' }
        ],
        businessImpact: [
          'Became the leading LMS in the GCC region',
          'Enrolled 1M+ students within 6 months of launch',
          'Secured partnerships with 200+ schools and universities',
          'Attracted $30M Series B investment',
          'Expanded content library to 5,000+ courses',
          'Recognised by UNESCO as a regional EdTech leader'
        ],
        testimonial: {
          quote: 'We went from a single-country platform to the region\'s leading EdTech solution in just over a year. The fractional CTO brought the architecture vision and execution discipline we needed to move at that speed.',
          author: 'Chief Product Officer',
          company: 'Regional Learning Platform'
        }
      },
      images: [
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-edtech-003.jpg',
          caption: 'Multi-language classroom interface'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-edtech-003.jpg',
          caption: 'Real-time collaboration tools'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-edtech-003.jpg',
          caption: 'Adaptive learning dashboard'
        }
      ],
      keyTakeaways: [
        'Multi-region deployment is essential for low-latency global platforms',
        'CDN-first architecture dramatically reduces content delivery costs',
        'RTL language support must be built into the design system from day one',
        'WebSocket-based collaboration requires careful horizontal scaling design',
        'Adaptive algorithms improve engagement without requiring heavy AI investment',
        'Phased country rollout reduces risk and allows iterative improvement'
      ]
    },
    {
      id: '4',
      title: 'CleanTech IoT - Europe',
      subtitle: 'Processing Real-Time Data from 10K+ Sensors with Predictive Maintenance',
      industry: 'CleanTech',
      region: 'Europe',
      date: '2023',
      duration: '20 months',
      client: 'Smart Energy Management Company',
      heroImage: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-cleantech-004.jpg',
      overview: 'A European CleanTech company deployed smart energy sensors across industrial facilities but lacked the data infrastructure to turn raw sensor telemetry into actionable insights. The goal was a real-time IoT platform with predictive maintenance and energy optimisation.',
      challenge: {
        description: 'The company had 10,000+ IoT sensors generating millions of data points per hour with no scalable ingestion pipeline. Maintenance was reactive, energy waste was unmeasured, and the data science team had no platform to run ML models against live data.',
        painPoints: [
          'No scalable IoT data ingestion pipeline',
          'Reactive maintenance causing costly unplanned downtime',
          'Inability to correlate sensor data with energy consumption',
          'Data stored in siloed flat files with no query capability',
          'No real-time alerting for anomaly detection',
          'Data science team blocked without a feature store'
        ]
      },
      solution: {
        description: 'Architected an end-to-end IoT data platform on AWS with MQTT ingestion, time-series storage, edge computing for low-latency decisions, and an ML pipeline for predictive maintenance.',
        approach: [
          {
            phase: 'Phase 1: Data Platform Foundation (Months 1-4)',
            activities: [
              'Designed MQTT broker architecture for sensor ingestion',
              'Deployed AWS IoT Core and Kinesis Data Streams',
              'Set up TimescaleDB for time-series storage at scale',
              'Built data pipeline with schema validation and deduplication',
              'Created real-time monitoring dashboard with Grafana'
            ]
          },
          {
            phase: 'Phase 2: Edge Computing & Alerting (Months 5-9)',
            activities: [
              'Deployed AWS Greengrass edge nodes at 50 facilities',
              'Implemented local anomaly detection with sub-second latency',
              'Built PagerDuty-integrated alerting for critical thresholds',
              'Developed digital twin models for each facility',
              'Established data quality scoring and lineage tracking'
            ]
          },
          {
            phase: 'Phase 3: ML & Predictive Maintenance (Months 10-16)',
            activities: [
              'Built Apache Spark feature engineering pipeline',
              'Trained predictive maintenance models on 18 months of historical data',
              'Deployed models to edge nodes for real-time inference',
              'Created maintenance scheduling engine with priority scoring',
              'Integrated with ERP systems for work order automation'
            ]
          },
          {
            phase: 'Phase 4: Energy Optimisation & Scale (Months 17-20)',
            activities: [
              'Launched energy optimisation recommendation engine',
              'Expanded to 10,000+ sensors across all facilities',
              'Delivered carbon footprint tracking and ESG reporting module',
              'Built self-service analytics portal for facility managers',
              'Achieved ISO 50001 energy management certification'
            ]
          }
        ],
        technologies: [
          { name: 'AWS IoT Core', purpose: 'Sensor Ingestion' },
          { name: 'Python', purpose: 'ML & Data Pipelines' },
          { name: 'TimescaleDB', purpose: 'Time-Series Storage' },
          { name: 'Apache Spark', purpose: 'Feature Engineering' },
          { name: 'React', purpose: 'Analytics Dashboard' },
          { name: 'MQTT', purpose: 'Sensor Protocol' },
          { name: 'AWS Greengrass', purpose: 'Edge Computing' },
          { name: 'Grafana', purpose: 'Real-Time Monitoring' }
        ]
      },
      results: {
        metrics: [
          { label: 'Sensors Deployed', value: '10K+', description: 'Across industrial facilities' },
          { label: 'Energy Savings', value: '60%', description: 'Average reduction per facility' },
          { label: 'Carbon Reduction', value: '45%', description: 'CO₂ footprint decrease' },
          { label: 'Maintenance Cost', value: '-85%', description: 'Unplanned downtime eliminated' },
          { label: 'Alert Latency', value: '<1s', description: 'Edge anomaly detection response' },
          { label: 'ROI', value: '8x', description: 'Return on platform investment' }
        ],
        businessImpact: [
          'Enabled portfolio-wide ESG reporting for investors',
          'Won EU Green Innovation Award 2023',
          'Expanded to 3 additional European countries',
          'Signed 12 new enterprise clients post-launch',
          'Reduced operational costs by €4M annually',
          'Platform licensed to two utility companies'
        ],
        testimonial: {
          quote: 'The IoT platform changed how we think about energy. We went from guessing to predicting — maintenance costs collapsed and our ESG scores improved dramatically. An exceptional outcome.',
          author: 'Head of Operations',
          company: 'Smart Energy Management Company'
        }
      },
      images: [
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-cleantech-004.jpg',
          caption: 'Real-time sensor monitoring dashboard'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-cleantech-004.jpg',
          caption: 'Predictive maintenance alert system'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-cleantech-004.jpg',
          caption: 'Energy optimisation analytics'
        }
      ],
      keyTakeaways: [
        'Edge computing reduces latency and cloud costs for IoT workloads',
        'Time-series databases are purpose-built for sensor data at scale',
        'Predictive maintenance ROI justifies IoT platform investment within months',
        'Digital twins unlock simulation without risking live infrastructure',
        'ESG reporting capabilities are increasingly a procurement requirement',
        'Feature stores accelerate ML iteration on operational data'
      ]
    },
    {
      id: '5',
      title: 'E-Commerce Platform - Global',
      subtitle: 'Eliminating Database Bottlenecks and Achieving 80% Faster Page Loads',
      industry: 'E-Commerce',
      region: 'Global',
      date: '2023',
      duration: '14 months',
      client: 'Global E-Commerce Retailer',
      heroImage: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-ecommerce-005.jpg',
      overview: 'A high-growth global e-commerce platform was losing revenue to database-induced slowdowns during peak traffic. Cart abandonment was rising, conversion rates dropping, and the engineering team had no clear path to resolving the systemic performance issues.',
      challenge: {
        description: 'The platform\'s PostgreSQL monolith had become a bottleneck at scale. Every Black Friday caused outages. Read/write contention, missing indexes, and a lack of caching meant even browsing was slow. The team needed an architectural overhaul without taking the platform offline.',
        painPoints: [
          'Database read/write contention causing timeouts during peak traffic',
          'No caching layer — every request hitting the primary database',
          'Slow product search degrading conversion rates',
          'Cart and checkout failures during promotional events',
          'No real-time inventory visibility across warehouses',
          'Lack of personalisation reducing average order value'
        ]
      },
      solution: {
        description: 'Implemented CQRS pattern to separate read and write paths, introduced Redis caching at multiple layers, sharded the database, replaced product search with Elasticsearch, and built a personalisation engine.',
        approach: [
          {
            phase: 'Phase 1: Diagnosis & Quick Wins (Months 1-2)',
            activities: [
              'Profiled all slow queries and identified top 20 bottlenecks',
              'Added missing database indexes for immediate performance gains',
              'Introduced Redis cache for product catalogue and session data',
              'Set up APM with Datadog for end-to-end request tracing',
              'Stabilised checkout service with circuit breakers'
            ]
          },
          {
            phase: 'Phase 2: CQRS & Search (Months 3-7)',
            activities: [
              'Implemented CQRS pattern separating read models from write models',
              'Deployed Elasticsearch for product search and faceted filtering',
              'Built read replica routing for all catalogue queries',
              'Migrated session management fully to Redis Cluster',
              'Launched CDN for all static assets and product images'
            ]
          },
          {
            phase: 'Phase 3: Database Sharding & Inventory (Months 8-11)',
            activities: [
              'Sharded order database by geographic region',
              'Built real-time inventory management service with event sourcing',
              'Implemented optimistic locking for checkout concurrency',
              'Load tested to validate 5x Black Friday traffic capacity',
              'Introduced blue-green deployment for zero-downtime releases'
            ]
          },
          {
            phase: 'Phase 4: Personalisation & Growth (Months 12-14)',
            activities: [
              'Launched ML-based product recommendation engine',
              'Built A/B testing framework for conversion optimisation',
              'Deployed real-time pricing and promotions engine',
              'Established SRE practices with error budget tracking',
              'Delivered $10M+ incremental revenue impact in first quarter'
            ]
          }
        ],
        technologies: [
          { name: 'AWS', purpose: 'Cloud Infrastructure' },
          { name: 'Node.js', purpose: 'Backend Services' },
          { name: 'Redis', purpose: 'Caching & Sessions' },
          { name: 'PostgreSQL', purpose: 'Primary Database (sharded)' },
          { name: 'Elasticsearch', purpose: 'Product Search' },
          { name: 'Next.js', purpose: 'Frontend' },
          { name: 'Datadog', purpose: 'APM & Monitoring' },
          { name: 'Kafka', purpose: 'Event Streaming' }
        ]
      },
      results: {
        metrics: [
          { label: 'Page Load Time', value: '-80%', description: 'Average reduction across all pages' },
          { label: 'Conversion Rate', value: '+45%', description: 'Uplift from performance improvements' },
          { label: 'Peak Traffic', value: '5x', description: 'Black Friday handled without incident' },
          { label: 'Customer Satisfaction', value: '+70%', description: 'NPS improvement post-launch' },
          { label: 'Incremental Revenue', value: '$10M+', description: 'First quarter post-launch' },
          { label: 'Cart Abandonment', value: '-35%', description: 'Checkout failure rate eliminated' }
        ],
        businessImpact: [
          'First Black Friday with zero checkout downtime',
          'Expansion to 12 new international markets',
          'Reduced infrastructure spend by 30% despite 5x traffic growth',
          'Engineering team velocity increased by 2x after architecture cleanup',
          'Attracted strategic acquisition interest valued at $150M+',
          'Platform now handles 50M+ product page views per month'
        ],
        testimonial: {
          quote: 'We\'d been fighting database fires for two years. Within six months the fires were out, conversion was up, and we sailed through Black Friday for the first time in company history. Transformational.',
          author: 'VP of Engineering',
          company: 'Global E-Commerce Retailer'
        }
      },
      images: [
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-ecommerce-005.jpg',
          caption: 'Performance monitoring dashboard'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-ecommerce-005.jpg',
          caption: 'Real-time inventory management system'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-ecommerce-005.jpg',
          caption: 'Personalisation and recommendation engine'
        }
      ],
      keyTakeaways: [
        'CQRS pattern is highly effective for read-heavy e-commerce workloads',
        'Redis caching at multiple layers can eliminate 80%+ of database load',
        'Elasticsearch transforms product discovery and search conversion',
        'Database sharding by region reduces cross-region latency significantly',
        'Event sourcing for inventory enables real-time accuracy without locks',
        'Performance improvements and revenue growth are directly correlated'
      ]
    },
    {
      id: '6',
      title: 'SaaS Platform - Europe',
      subtitle: 'Migrating a Legacy Monolith to Microservices with 90% Faster Deployments',
      industry: 'SaaS',
      region: 'Europe',
      date: '2022',
      duration: '16 months',
      client: 'European B2B SaaS Company',
      heroImage: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-saas-006.jpg',
      overview: 'A European B2B SaaS company growing from 50 to 200 employees was crippled by a legacy monolithic codebase. Deployments took days, teams blocked each other, and outages were frequent. The business needed a modern engineering foundation to sustain its growth trajectory.',
      challenge: {
        description: 'The monolith had accumulated years of technical debt. Deployments required full regression testing and manual steps taking 2-3 days. Any team\'s change could break another team\'s feature. Infrastructure was manually provisioned, monitoring was minimal, and on-call engineers were burning out from constant incidents.',
        painPoints: [
          '2-3 day deployment cycle blocking product velocity',
          'Teams constantly breaking each other\'s features',
          'Manual infrastructure provisioning taking days per environment',
          'No automated testing — all regression testing was manual',
          'Minimal observability making incident diagnosis very slow',
          'Engineers burning out from frequent on-call incidents'
        ]
      },
      solution: {
        description: 'Led a 16-month strangler-fig migration to microservices, introduced infrastructure as code, built a full CI/CD platform, established SRE practices, and rebuilt the engineering culture around DevOps principles.',
        approach: [
          {
            phase: 'Phase 1: Stabilisation & Observability (Months 1-3)',
            activities: [
              'Deployed Prometheus and Grafana for full-stack observability',
              'Established on-call runbooks and incident playbooks',
              'Introduced feature flags to de-risk deployments immediately',
              'Began automated test suite covering critical paths',
              'Mapped service boundaries within the monolith'
            ]
          },
          {
            phase: 'Phase 2: CI/CD & Infrastructure as Code (Months 4-7)',
            activities: [
              'Built Jenkins CI/CD pipelines for automated test and deploy',
              'Provisioned all infrastructure via Terraform',
              'Containerised the monolith with Docker for environment parity',
              'Set up Kubernetes cluster for microservice hosting',
              'Reduced deployment time from 3 days to 4 hours'
            ]
          },
          {
            phase: 'Phase 3: Microservices Migration (Months 8-13)',
            activities: [
              'Extracted billing, notifications, and auth as independent services',
              'Implemented API gateway for service routing',
              'Built event-driven communication between services via Kafka',
              'Established team ownership model — one team per service',
              'Achieved zero-downtime deployments for all extracted services'
            ]
          },
          {
            phase: 'Phase 4: Culture & Full Migration (Months 14-16)',
            activities: [
              'Completed migration of remaining monolith domains',
              'Established error budgets and SLOs per service',
              'Ran DevOps culture workshops across all engineering teams',
              'Built internal developer portal for service discovery',
              'Reduced deployment frequency from weekly to multiple times daily'
            ]
          }
        ],
        technologies: [
          { name: 'Kubernetes', purpose: 'Container Orchestration' },
          { name: 'Docker', purpose: 'Containerisation' },
          { name: 'Jenkins', purpose: 'CI/CD Pipelines' },
          { name: 'Prometheus', purpose: 'Metrics & Alerting' },
          { name: 'Grafana', purpose: 'Observability Dashboards' },
          { name: 'Terraform', purpose: 'Infrastructure as Code' },
          { name: 'Kafka', purpose: 'Event-Driven Messaging' },
          { name: 'Vault', purpose: 'Secrets Management' }
        ]
      },
      results: {
        metrics: [
          { label: 'Deployment Speed', value: '90%', description: 'Faster — from 3 days to 20 minutes' },
          { label: 'System Uptime', value: '99.95%', description: 'Up from 97.8% pre-migration' },
          { label: 'Infrastructure Cost', value: '-50%', description: 'Through right-sizing and IaC' },
          { label: 'Team Productivity', value: '3x', description: 'Feature delivery velocity increase' },
          { label: 'Deployment Frequency', value: '10x', description: 'Multiple deploys per day achieved' },
          { label: 'Incident MTTR', value: '-75%', description: 'Mean time to resolution' }
        ],
        businessImpact: [
          'Engineering attrition dropped to zero in the 12 months post-migration',
          'Time-to-market for new features reduced from months to weeks',
          'Successfully onboarded 5 enterprise clients requiring SLA guarantees',
          'Raised €25M Series B on the strength of technical due diligence',
          'Platform scaled from 500 to 5,000 business customers',
          'Won Best Engineering Team award at European SaaS Summit 2023'
        ],
        testimonial: {
          quote: 'The transformation was more than technical. Our engineers are proud of what they build again. We deploy dozens of times a day, incidents are rare, and we can finally keep our product promises to customers.',
          author: 'CTO',
          company: 'European B2B SaaS Company'
        }
      },
      images: [
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-saas-006.jpg',
          caption: 'CI/CD pipeline and deployment dashboard'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-saas-006.jpg',
          caption: 'Microservices architecture overview'
        },
        {
          url: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-study-saas-006.jpg',
          caption: 'Observability and SLO tracking'
        }
      ],
      keyTakeaways: [
        'Strangler-fig migration avoids big-bang rewrites and reduces business risk',
        'Observability must be established before migration to diagnose issues fast',
        'Feature flags decouple deployment from release, enabling safer velocity',
        'Team ownership models aligned to service boundaries unlock parallel delivery',
        'Infrastructure as code is foundational to any scalable DevOps practice',
        'Cultural change is as important as technical change in DevOps transformations'
      ]
    }
  ];

  const study = caseStudies.find(s => s.id === studyId) || caseStudies[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-800">
                {study.industry}
              </span>
              <span className="px-4 py-2 bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 text-sm font-medium rounded-full border border-violet-200 dark:border-violet-800">
                {study.region}
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full">
                {study.duration}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {study.title}
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8">
              {study.subtitle}
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <i className="ri-building-line text-indigo-600 dark:text-indigo-400"></i>
                <span>{study.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line text-indigo-600 dark:text-indigo-400"></i>
                <span>{study.date}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-96 sm:h-[500px]">
                <Image
                  src={study.heroImage}
                  alt={study.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {study.overview}
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-900/20 rounded-lg">
              <i className="ri-error-warning-line text-2xl text-red-600 dark:text-red-400"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Challenge</h2>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            {study.challenge.description}
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-6 border border-red-200 dark:border-red-800">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Pain Points</h3>
            <div className="space-y-3">
              {study.challenge.painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-600 dark:text-red-400 text-xl mt-0.5 flex-shrink-0"></i>
                  <span className="text-slate-700 dark:text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
              <i className="ri-lightbulb-line text-2xl text-indigo-600 dark:text-indigo-400"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Solution</h2>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            {study.solution.description}
          </p>

          {/* Approach Timeline */}
          <div className="space-y-8 mb-12">
            {study.solution.approach.map((phase, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
                <div className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center bg-indigo-600 text-white rounded-full text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-lg mt-0.5 flex-shrink-0"></i>
                      <span className="text-slate-600 dark:text-slate-400">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technologies Used</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {study.solution.technologies.map((tech, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <i className="ri-code-box-line text-indigo-600 dark:text-indigo-400 text-xl flex-shrink-0"></i>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{tech.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{tech.purpose}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900/20 rounded-lg">
              <i className="ri-trophy-line text-2xl text-green-600 dark:text-green-400"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Results & Impact</h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {study.results.metrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800 text-center">
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">{metric.label}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">{metric.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{metric.description}</div>
              </div>
            ))}
          </div>

          {/* Business Impact */}
          <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-8 border border-green-200 dark:border-green-800 mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Business Impact</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {study.results.businessImpact.map((impact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <i className="ri-check-double-line text-green-600 dark:text-green-400 text-xl mt-0.5 flex-shrink-0"></i>
                  <span className="text-slate-700 dark:text-slate-300">{impact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <i className="ri-double-quotes-l text-5xl text-white/30 mb-6"></i>
              <p className="text-xl sm:text-2xl leading-relaxed mb-6">{study.results.testimonial.quote}</p>
              <div>
                <div className="font-semibold text-lg">{study.results.testimonial.author}</div>
                <div className="text-indigo-200">{study.results.testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Project Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {study.images.map((image, index) => (
              <div key={index} className="group">
                <div className="relative rounded-xl overflow-hidden mb-4 h-64">
                  <Image
                    src={image.url}
                    alt={image.caption}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Key Takeaways</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {study.keyTakeaways.map((takeaway, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <i className="ri-lightbulb-flash-line text-indigo-600 dark:text-indigo-400 text-xl mt-0.5 flex-shrink-0"></i>
                <span className="text-slate-700 dark:text-slate-300">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
              Let&apos;s discuss how fractional CTO services can help your startup achieve remarkable growth and technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-indigo-600 text-base font-semibold rounded-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Book Free Consultation
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 bg-transparent text-white text-base font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                View More Case Studies
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}

export default function CaseStudyDetailPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
        <CaseStudyContent />
      </Suspense>
      <Footer />
    </div>
  );
}
