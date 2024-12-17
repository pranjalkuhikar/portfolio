import FAQs from "@/sections/FAQs";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default page;
