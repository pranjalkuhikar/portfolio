"use client";
import { useRef } from "react"; // Import useRef
import image1 from "@/assets/images/project-1.png";
import image2 from "@/assets/images/project-2.png";
import image3 from "@/assets/images/project-3.png";
import image4 from "@/assets/images/project-4.png";
import image5 from "@/assets/images/project-5.png";
import image6 from "@/assets/images/project-6.png";
import image7 from "@/assets/images/project-7.png";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData for type safety
import ProjectLinkButton from "@/components/ProjectLinkButton";
import { motion, useMotionValue, useTransform } from "framer-motion"; // Import Framer Motion hooks

interface Project {
  name: string;
  image: StaticImageData;
  githubUrl: string;
  liveDemoUrl: string;
}

const projects: Project[] = [
  {
    name: "Movie App (React.js)",
    image: image1,
    githubUrl: "https://github.com/pranjalkuhikar/MovieApp/",
    liveDemoUrl: "https://movie-app-nine-khaki.vercel.app/",
  },
  {
    name: "Ochi Studio (React.js)",
    image: image2,
    githubUrl: "https://github.com/pranjalkuhikar/Ochi/",
    liveDemoUrl: "https://ochi-orpin.vercel.app/",
  },
  {
    name: "Aora Video Sharing App (ReactNative)",
    image: image3,
    githubUrl: "https://github.com/pranjalkuhikar/Aora/",
    liveDemoUrl: "https://github.com/pranjalkuhikar/Aora/",
  },
  {
    name: "Airbnb Clone App (Backend)",
    image: image4,
    githubUrl: "https://github.com/pranjalkuhikar/Airbnb/",
    liveDemoUrl: "https://airbnb-run1.onrender.com/listings",
  },
  {
    name: "Note Web App (Next.js)",
    image: image5,
    githubUrl: "https://github.com/pranjalkuhikar/Note_App",
    liveDemoUrl: "https://note-app-five-gold.vercel.app/",
  },
  {
    name: "Logo Lumina (React.js)",
    image: image6,
    githubUrl: "https://github.com/pranjalkuhikar/LogoLumina",
    liveDemoUrl: "https://logo-lumina.vercel.app/",
  },
  {
    name: "E-commerce App (React.js)",
    image: image7,
    githubUrl: "https://github.com/pranjalkuhikar/E_Commerce",
    liveDemoUrl: "https://e-commerce-eosin-seven-90.vercel.app/",
  },
];

// ProjectItem sub-component
const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const { name, image, githubUrl, liveDemoUrl } = project;
  const itemRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      // Calculate mouse position relative to the center of the item
      mouseX.set(event.clientX - (rect.left + rect.width / 2));
      mouseY.set(event.clientY - (rect.top + rect.height / 2));
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Adjust the output range for more or less movement (e.g., -10 to 10 pixels)
  const imageX = useTransform(mouseX, [-200, 200], [-10, 10]);
  const imageY = useTransform(mouseY, [-200, 200], [-10, 10]);

  return (
    <div
      ref={itemRef}
      key={name}
      className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 flex flex-col relative group/project"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-stone-300/70 -z-10"></div>
      <div className="relative z-0">
        <div className="aspect-video md:hidden">
          {" "}
          {/* Mobile image */}
          <Image
            src={image}
            alt={`${name} image`}
            className="object-cover size-full"
          />
        </div>
        <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_auto] md:gap-8">
          {" "}
          {/* Adjusted grid for auto width on last column */}
          <div className="lg:group-hover/project:pl-8 transition-all duration-700">
            {" "}
            {/* Column 1: Project Name */}
            <h3 className="text-2xl md:text-3xl lf:text-4xl">{name}</h3>
          </div>
          {/* Column 2: Desktop Hover Image Container */}
          <div className="relative hidden md:block h-full">
            {" "}
            {/* Ensure this div takes up grid cell height */}
            <motion.div
              className="absolute -top-16 left-0 w-full opacity-0 group-hover/project:opacity-100 transition-opacity duration-300 z-10 pointer-events-none aspect-video"
              style={{
                x: imageX,
                y: imageY,
                transition: "transform 0.05s ease-out",
              }}
            >
              <Image
                src={image}
                alt={`${name} image`}
                className="object-cover size-full rounded-lg shadow-xl"
                priority={name === projects[0].name}
              />
            </motion.div>
          </div>
          {/* Column 3: Buttons and Arrow */}
          <div className="lg:group-hover/project:pl-8 transition-all duration-700 flex items-center justify-end">
            <div className="flex items-center gap-2">
              {" "}
              {/* Reduced gap for tighter button group */}
              <ProjectLinkButton
                href={githubUrl}
                variant="github"
                iconAfter={
                  <div className="overflow-hidden size-4">
                    {" "}
                    {/* Adjusted icon size */}
                    <div className="h-4 w-8 flex group-hover/button:-translate-x-1/2 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4 shrink-0"
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
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4 shrink-0"
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
                View Code
              </ProjectLinkButton>
              <ProjectLinkButton
                href={liveDemoUrl}
                variant="live"
                iconAfter={
                  <div className="overflow-hidden size-4">
                    {" "}
                    {/* Adjusted icon size */}
                    <div className="h-4 w-8 flex group-hover/button:-translate-x-1/2 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4 shrink-0"
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
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4 shrink-0"
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
                Live Demo
              </ProjectLinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40" id="projects">
      <div className="p-[1rem] md:p-[2rem] lg:p-[2.6rem]">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Work</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
