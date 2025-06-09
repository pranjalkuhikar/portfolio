import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { usePresence } from "motion/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

const Testimonial = (
  props: {
    quote: string;
    name: string;
    role: string;
    company: string;
    image: string | StaticImport;
    imagePositionY: number;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const {
    quote,
    name,
    role,
    company,
    image,
    imagePositionY,
    className,
    ...rest
  } = props;

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();
  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimation().then(() => {
        citeEntranceAnimation();
      });
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [
    isPresent,
    safeToRemove,
    quoteEntranceAnimation,
    citeEntranceAnimation,
    quoteExitAnimation,
    citeExitAnimation,
  ]);

  return (
    <div
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center",
        className
      )}
      {...rest}
    >
      <div className="aspect-square md:aspect-[9/12] md:col-span-2 relative">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <Image
          src={image}
          alt={name}
          className="size-full object-cover"
          style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div
          className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl"
          ref={citeScope}
        >
          {name},{role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
