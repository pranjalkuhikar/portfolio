"use client";

import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import Testimonial from "@/components/Testimonial";

const testimonials = [
  {
    name: "Prashant Prabodh",
    company: "IXO Labs",
    role: "Chief Architect and ex-consultant",
    quote:
      "Pranjal Kuhikar is a reliable and committed IT professional. As a junior developer, he quickly learns, works hard, and delivers quality results. His initiative and persistence like starting his own website set him apart. I highly recommend him for any role that values dedication and growth.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Sahil Vaidya",
    company: "Technology World Creater",
    role: "CEO and Founder",
    quote:
      "Pranjal Kuhikar brought our vision to life with clean code, smart design, and professional delivery. A reliable and skilled web developer.",
    image: image2,
    imagePositionY: 0.1,
  },
];

const Testimonials = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      return curr === 0 ? testimonials.length - 1 : curr - 1;
    });
  };
  const handleClickNext = () => {
    setTestimonialIndex((curr) => {
      return curr === testimonials.length - 1 ? 0 : curr + 1;
    });
  };

  return (
    <section className="py-24 md:py-32 lg:py-40" id="testimonials">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.span className="whitespace-nowrap" style={{ x: transformTop }}>
          Some nice words from my past clients
        </motion.span>

        <motion.span
          className="whitespace-nowrap self-end text-orange-500"
          style={{ x: transformBottom }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="p-[1rem] md:p-[2rem] lg:p-[2.6rem]">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    key={index}
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                  />
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
            onClick={handleClickPrev}
            title="Previous testimonial"
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
            onClick={handleClickNext}
            title="Next testimonial"
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
