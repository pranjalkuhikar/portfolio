import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, variant, children, iconAfter, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "h-11 px-6 rounded-xl border border-orange-500 uppercase active:scale-95 inline-flex items-center gap-2",
          variant === "primary" && "bg-orange-500 text-white",
          variant === "secondary" && "",
          variant === "text" && "h-auto px-0 border-transparent",
          className
        )}
        {...rest}
      >
        <span>{children}</span>
        {iconAfter && <span>{iconAfter}</span>}
      </button>
    </>
  );
};

export default Button;
