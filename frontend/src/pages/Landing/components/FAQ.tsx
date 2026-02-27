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
        "The hackathon runs for 24-36 hours from 11-12 April 2026, starting at 10:00 AM. You'll have the whole time to build, iterate, and polish your project before the final presentations and judging rounds.",
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
        "Here's the flow: registration and team formation at the start, then you've got 24-36 hours to build your solution. We'll have mentors available throughout, plus workshops and resources. At the end, teams pitch to judges using a structured scoring framework that evaluates technical execution and business viability. Winners are announced across each track plus special prizes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-transparent px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl border border-zinc-800 bg-zinc-900 p-6 md:p-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-zinc-800 pb-6">
          <h2 className="text-4xl font-semibold uppercase tracking-wide md:text-5xl">
            FAQ
          </h2>
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
            Quick answers before you apply
          </p>
        </div>

        <div className="divide-y divide-zinc-800 border border-zinc-800 bg-zinc-900/40">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-5 py-5 text-left"
              >
                <span className="pr-4 text-base font-medium text-zinc-100 md:text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-zinc-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
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
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="border-t border-zinc-800 bg-zinc-950/60 px-5 py-4 leading-relaxed text-zinc-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
