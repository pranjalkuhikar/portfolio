"use client";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";

/* eslint-disable @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, setTopLineScope] = useAnimate();
  const [bottomLineScope, setBottomLineScope] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      setTopLineScope([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);
      setBottomLineScope([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);
    } else {
      setTopLineScope([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ]);
      setBottomLineScope([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ]);
    }
  }, [
    isOpen,
    setTopLineScope,
    setBottomLineScope,
    bottomLineScope,
    topLineScope,
  ]);

  return (
    <header className="">
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md ">
        <div className="flex items-center justify-between h-20 !max-w-full p-[1rem] md:p-[2rem] lg:p-[2.6rem]">
          <div className="text-xl md:text-2xl flex items-center font-medium uppercase tracking-tight text-white">
            Pranjal &nbsp; Kuhikar
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full">
        <div className="flex items-center justify-end h-20 !max-w-full p-[1rem] md:p-[2rem] lg:p-[2.6rem]">
          <div className="flex items-center gap-4">
            <Button variant="primary" className=" hidden md:inline-flex ">
              Contact Me
            </Button>
            <div
              className="px-4 size-14 border bg-stone-200 border-stone-400 rounded-full inline-flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  x="3"
                  y="7"
                  width="18"
                  height="2"
                  fill="currentColor"
                  ref={topLineScope}
                  style={{ transformOrigin: "12px 8px" }}
                />
                <motion.rect
                  x="3"
                  y="15"
                  width="18"
                  height="2"
                  fill="currentColor"
                  ref={bottomLineScope}
                  style={{ transformOrigin: "12px 8px" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
