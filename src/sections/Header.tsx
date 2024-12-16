import Button from "@/components/Button";

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
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="flex items-center justify-between h-20 !max-w-full p-[1rem] md:p-[2rem] lg:p-[2.6rem]">
        <div className="text-xl md:text-2xl flex items-center font-medium uppercase tracking-tight">
          Pranjal &nbsp; Kuhikar
        </div>
        <div className="flex items-center gap-4">
          <Button variant="primary" className=" hidden md:inline-flex ">
            Contact Me
          </Button>
          <div className="px-4 size-14 border bg-stone-200 border-stone-400 rounded-full inline-flex items-center justify-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="15" width="18" height="2" fill="currentColor" />
              <rect x="3" y="7" width="18" height="2" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
