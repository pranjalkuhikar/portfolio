import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectLinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "github" | "live";
  iconAfter?: ReactNode; // Add iconAfter prop
}

const ProjectLinkButton: FC<ProjectLinkButtonProps> = ({
  href,
  children,
  className,
  variant,
  iconAfter, // Destructure iconAfter
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-150 ease-in-out transform hover:scale-105 group/button"; // Added gap-2 and group/button

  let variantStyle = "";
  if (variant === "github") {
    variantStyle = "bg-stone-700 hover:bg-stone-600 focus:ring-stone-500";
    // Future: Add GitHub icon here if desired
  } else if (variant === "live") {
    variantStyle = "bg-orange-500 hover:bg-orange-600 focus:ring-orange-500";
    // Future: Add external link icon here if desired
  } else {
    // Default style if no variant or an unknown variant is provided
    variantStyle = "bg-sky-600 hover:bg-sky-700 focus:ring-sky-500";
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(baseStyle, variantStyle, className)}
    >
      <span>{children}</span> {/* Wrap children in span for consistent layout with icon */}
      {iconAfter && <span>{iconAfter}</span>}
    </a>
  );
};

export default ProjectLinkButton;
