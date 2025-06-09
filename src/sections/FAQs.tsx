"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and tools like Next.js, Tailwind CSS, Framer Motion, and more.",
  },
  {
    question: "Do you build mobile-friendly and responsive websites?",
    answer:
      "Yes, I build fully responsive websites that work smoothly across all devices and screen sizes.",
  },
  {
    question: "Can you create animations or interactive UI elements?",
    answer:
      "Absolutely! I use tools like Framer Motion and GSAP to build smooth and creative user interactions.",
  },
  {
    question: "Do you provide both frontend and backend development?",
    answer:
      "Yes, I handle both frontend and backend using modern technologies, though I specialize more in frontend experiences.",
  },
  {
    question: "Are you open to freelance or remote opportunities?",
    answer:
      "Yes, I’m currently available for freelance and remote roles. I can adapt to different time zones and project needs.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "I provide regular updates, share progress through GitHub or task boards, and stay in touch via email or calls as preferred.",
  },
];

const FAQs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <section className="py-24 md:py-32 lg:py-40" id="faqs">
      <div className="p-[1rem] md:p-[2rem] lg:p-[2.6rem]">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
              onClick={() =>
                setSelectedIndex(faqIndex === selectedIndex ? null : faqIndex)
              }
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bg-stone-300 bottom-0 left-0 -z-10 group-hover/faq:h-full transition-all duration-700",
                  faqIndex === selectedIndex && "h-full"
                )}
              ></div>
              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8"
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300 bg-stone-200",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <p className="mt-4 md:mt-6 lg:mt-8 text-lg md:text-xl lg:text-2xl">
                      {answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
