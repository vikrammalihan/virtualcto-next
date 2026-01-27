import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to prepare all the materials?',
      answer: 'Depending on the package, we typically deliver in 1-3 weeks. The Essential package takes about 2 weeks, Professional takes 10 days, and Premium can be completed in 1 week. We understand fundraising timelines are often tight and can accommodate rush requests.'
    },
    {
      question: 'Do you need access to our codebase?',
      answer: 'Yes, we need read-only access to your codebase to accurately document your architecture and technical setup. We sign NDAs and follow strict security protocols. Alternatively, you can provide us with detailed technical information if code access isn\'t possible.'
    },
    {
      question: 'What if investors ask technical questions you didn\'t prepare for?',
      answer: 'With the Premium package, we can attend your investor meetings to answer technical questions in real-time. For other packages, we provide comprehensive Q&A preparation covering 95% of typical investor questions, plus email support for any follow-up questions.'
    },
    {
      question: 'Can you help with technical due diligence after term sheets?',
      answer: 'Absolutely! Our Premium package includes 60 days of post-fundraising support specifically for this. We can also provide additional due diligence support as a separate engagement if needed.'
    },
    {
      question: 'What if we don\'t have a technical co-founder?',
      answer: 'That\'s actually a common scenario and one of the main reasons startups hire us. We can position your technical setup in the best light and demonstrate that you have a solid technical strategy and the right advisors in place.'
    },
    {
      question: 'Do you work with non-technical founders?',
      answer: 'Yes! We specialize in translating complex technical concepts into clear, investor-friendly language. We\'ll work closely with you to understand your product and present it in a way that demonstrates technical credibility.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work with startups across all industries including SaaS, FinTech, HealthTech, E-commerce, AI/ML, Blockchain, and more. Our team has experience with diverse tech stacks and business models.'
    },
    {
      question: 'Can you help update materials for multiple funding rounds?',
      answer: 'Yes! Many of our clients return for Series B, C, and beyond. We offer discounted rates for returning clients and can quickly update existing materials as your technology evolves.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our CTO-as-a-Service for Fundraising
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <i
                  className={`ri-arrow-down-s-line text-2xl text-emerald-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/book-consultation"
            className="inline-block px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all whitespace-nowrap cursor-pointer"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}