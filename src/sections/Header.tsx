"use client";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";

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
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );
    } else {
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ]);
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [
    isOpen,
    topLineAnimate,
    bottomLineAnimate,
    bottomLineScope,
    topLineScope,
    navScope,
    navAnimate,
  ]);

  const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-10"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-stone-200 border-t border-stone-800 last:border-b py-8 group/nav-item relative isolate"
              onClick={handleClickMobileNavItem}
            >
              <div className="p-[1rem] md:py-[1.5rem] md:px-[2rem] lg:py-[1rem] lg:px-[2.6rem] xl:p[2.6rem] !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">
        <div className="flex items-center justify-between h-20 !max-w-full p-[1rem] md:p-[2rem] lg:p-[2.6rem]">
          <div className="text-xl md:text-2xl flex items-center font-medium uppercase tracking-tight text-white">
            Pranjal &nbsp; Kuhikar
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full z-10">
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
