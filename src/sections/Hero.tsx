"use client";
import { FC, useEffect, useRef } from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Button from "@/components/Button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Hero: FC = () => {
  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });
  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  const { scope, entranceAnimation } = useTextRevealAnimation();
  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation]);

  return (
    <>
      <section>
        <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="!max-w-full p-[1rem] md:p-[2rem] lg:p-[4rem]">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
                ref={scope}
              >
                Crafting digital experience through code and creative design
              </motion.h1>
              <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.75 }}
                >
                  <Button
                    variant="secondary"
                    id="projects"
                    iconAfter={
                      <div className="overflow-hidden size-5">
                        <div className="h-5 w-10 flex group-hover/button:translate-x-[-65%] transition-transform duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 shrink-0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 shrink-0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                          </svg>
                        </div>
                      </div>
                    }
                  >
                    <span>View My Work</span>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  <Button variant="text" id="contact">
                    Let&apos;s Talk
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <motion.div
              className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
              style={{ width: portraitWidth }}
            >
              <Image
                src={heroImage}
                alt="My Profile"
                className="size-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="md:h-[200vh]" ref={scrollingDiv}></div>
      </section>
    </>
  );
};

export default Hero;
