"use client";

import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const navItems = [
  {
    href: "#intro",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "Faqs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Footer = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.error("Failed to copy email: ", err);
      toast.error("Failed to copy email.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleClickNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="p-[1rem] md:p-[2rem] lg:p-[2.6rem]">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl md:text-7xl mt-8 lg:text-8xl font-extralight"
                ref={scope}
              >
                Enough talk, Let&apos;s make something great together.
              </h2>
              <div className="relative inline-block">
                <Button
                  variant="secondary"
                  className="mt-8"
                  onClick={() => handleCopyEmail("pranjalkuhikar123@gmail.com")}
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="w-12 h-6 flex transition-transform duration-500 group-hover/button:-translate-x-1/2">
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
                    </div>
                  }
                >
                  pranjalkuhikar123@gmail.com
                </Button>
              </div>
              <div className="mt-4 flex space-x-4">
                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/pranjal-kuhikar/"
                  aria-label="LinkedIn"
                  className="text-white hover:text-gray-400"
                >
                  {/* LinkedIn Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 md:size-12 lg:size-14"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>

                {/* GitHub */}
                <Link
                  href="https://github.com/pranjalkuhikar"
                  aria-label="GitHub"
                  className="text-white hover:text-gray-400"
                >
                  {/* GitHub Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 md:size-12 lg:size-14"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>

                {/* X (Twitter) */}
                <Link
                  href="https://x.com/KuhikarPranjal" // Replace with your actual X profile URL
                  aria-label="X (Twitter)"
                  className="text-white hover:text-gray-400"
                >
                  {/* X (Twitter) Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 md:size-12 lg:size-14"
                  >
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.664-1.48 2.033-2.53-.936.555-1.956.959-3.01.995-.905-.788-2.144-1.28-3.479-1.28-2.587 0-4.675 2.09-4.675 4.672 0 .366.042.731.118 1.064-3.873-.195-7.304-2.05-9.602-4.868-.401.69-.635 1.492-.635 2.335 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.112-.583v.061c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.299 0-.593-.029-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.511 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.201-.005-.402-.014-.602.919-.658 1.729-1.479 2.37-2.417z" />
                  </svg>
                </Link>

                {/* LeetCode */}
                <Link
                  href="https://leetcode.com/u/Pranjal_Kuhikar/"
                  aria-label="LeetCode"
                  className="text-white hover:text-gray-400"
                >
                  {/* LeetCode Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 md:size-12 lg:size-14"
                  >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.226 1.616 1.616 0 0 0 2.19.003l2.698-2.884 3.526 3.774a1.664 1.664 0 0 0 2.174 0l6.407-6.862A1.374 1.374 0 0 0 22.526 0H13.483zM.056 23.992a.38.38 0 0 0-.054.163.376.376 0 0 0 .14.297l2.127 1.81a.605.605 0 0 0 .348.115.605.605 0 0 0 .348-.115l2.127-1.81a.376.376 0 0 0 .14-.297.38.38 0 0 0-.054-.163.374.374 0 0 0-.14-.297L2.614 21.87a.605.605 0 0 0-.348-.115.605.605 0 0 0-.348.115L.196 23.695a.374.374 0 0 0-.14.297z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Pranjal Kuhikar &bull; All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
