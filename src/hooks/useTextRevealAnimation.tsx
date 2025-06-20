import { stagger, useAnimate } from "motion/react";
import { useLayoutEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useLayoutEffect(() => {
    if (!scope.current || !(scope.current instanceof Element)) return;
    try {
      new SplitType(scope.current, {
        types: "lines,words",
        tagName: "span",
      });
    } catch {
      // Ignore SplitType errors
    }
  }, [scope]);

  const entranceAnimation = () => {
    if (!scope.current || !(scope.current instanceof Element))
      return Promise.resolve();
    try {
      return animate(
        scope.current.querySelectorAll(".word"),
        { transform: "translateY(0)" },
        { duration: 0.5, delay: stagger(0.15) }
      );
    } catch {
      return Promise.resolve();
    }
  };

  const exitAnimation = () => {
    if (!scope.current || !(scope.current instanceof Element))
      return Promise.resolve();
    try {
      return animate(
        scope.current.querySelectorAll(".word"),
        { transform: "translateY(100%)" },
        {
          duration: 0.3,
          delay: stagger(-0.025, {
            startDelay: scope.current.querySelectorAll(".word").length * 0.025,
          }),
        }
      );
    } catch {
      return Promise.resolve();
    }
  };

  return { scope, entranceAnimation, exitAnimation };
};

export default useTextRevealAnimation;
