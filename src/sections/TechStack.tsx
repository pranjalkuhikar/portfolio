"use client";

import { FC } from "react";
import Image from "next/image";

interface Tech {
  name: string;
  slug: string; // simple-icons slug
  color?: string; // main brand color hex without #
}

const technologies: Tech[] = [
  { name: "React", slug: "react", color: "61dafb" },
  { name: "React Native", slug: "react", color: "61dafb" }, // Using React icon for React Native
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "Node.js", slug: "node.js", color: "43853d" },
  { name: "Express.js", slug: "express", color: "000000" },
  { name: "JavaScript", slug: "javascript", color: "f7df1e" },
  { name: "HTML5", slug: "html5", color: "e34f26" },
  { name: "CSS3", slug: "css", color: "1572b6" }, // Corrected slug
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06b6d4" },
  { name: "Git", slug: "git", color: "f05032" },
  { name: "GitHub", slug: "github", color: "181717" },
  { name: "MongoDB", slug: "mongodb", color: "47a248" },
  { name: "Postman", slug: "postman", color: "ff6c37" },
  { name: "Redis", slug: "redis", color: "dc382d" },
  { name: "Redux Toolkit", slug: "redux", color: "764abc" },
];

const TechStack: FC = () => {
  return (
    <section
      id="tech-stack"
      aria-label="My Tech Stack Section"
      className=" py-20 md:py-28 lg:py-32 bg-stone-200"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <h2 className="text-[48px] md:text-[64px] font-extrabold text-center text-gray-900 mb-16 leading-tight">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-12">
          {technologies.map(({ name, slug, color }) => {
            const iconUrl = `https://cdn.simpleicons.org/${slug}/${
              color ?? "6b7280"
            }`;

            return (
              <article
                key={name}
                tabIndex={0}
                aria-label={name}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 transform"
              >
                <div className="mb-4 relative w-16 h-16">
                  <Image
                    src={iconUrl}
                    alt={`${name} Logo`}
                    fill
                    sizes="64px"
                    style={{ objectFit: "contain" }}
                    priority={false}
                  />
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-700 text-center select-none">
                  {name}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
