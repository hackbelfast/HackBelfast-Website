import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do I need to know how to code?",
      answer:
        "Nope! We've got a special prize for 'Best Use of No-Code Tools' - you can compete in any track using platforms like Lovable, Bubble, or Webflow. That said, if you want to code, go for it! We welcome everyone from complete beginners to seasoned devs.",
    },
    {
      question: "How long is the hackathon?",
      answer:
        "The hackathon runs for 24-36 hours from 7-8 March 2026. You'll have the whole time to build, iterate, and polish your project before the final presentations and judging rounds.",
    },
    {
      question:
        "What are these tracks and do I need to be studying that to compete?",
      answer:
        "Hell no! The tracks (Fintech, AI/ML, MedTech, Sustainability) are just themes to help you focus. You don't need to be studying finance to build a fintech app or studying medicine to do MedTech. Pick the problem domain that excites you most - we'll provide mentors and resources to help you learn as you build.",
    },
    {
      question: "What's the overall format?",
      answer:
        "Here's the flow: registration and team formation at the start, then you've got 24-36 hours to build your solution. We'll have mentors available throughout, plus workshops and resources. At the end, teams pitch to judges using a VCIC-inspired framework that evaluates both technical execution and business viability. Winners announced across each track plus special prizes!",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-purple-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
              >
                <span className="text-lg font-semibold text-gray-200 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-purple-400 transition-transform duration-300 flex-shrink-0 \${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 \${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Still have questions? Reach out to us!
          </p>
          <a
            href="mailto:info@hackbelfast.com"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
