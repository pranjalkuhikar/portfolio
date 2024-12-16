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
    <div className="flex items-center justify-between h-20 !max-w-full p-[1rem] md:p-[2rem] lg:p-[4rem]">
      <div className="text-xl md:text-2xl lg:text-3xl flex items-center font-medium uppercase tracking-tight">
        Pranjal &nbsp; Kuhikar
      </div>
      <div className="flex items-center gap-4">
        <button className="px-6 h-11 hidden md:inline-flex items-center bg-orange-500 text-white rounded-xl border border-orange-500 uppercase active:scale-95">
          Contact Me
        </button>
        <div className="px-4 size-14 border border-stone-400 rounded-full inline-flex items-center justify-center">
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
  );
};

export default Header;
