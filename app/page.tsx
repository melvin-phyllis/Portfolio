import HeroSection from "@/components/HeroSection";
import MyExpericenceSection from "@/components/MyExpericenceSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    < >
      <header className="">
        <Navbar />
      </header>
      <section className="hero-1 mx-4 md:mx-20 mt-20">
        <HeroSection />
      </section>
      <section className="skills mx-4 md:mx-20">
        <SkillsSection />
      </section>
      <section className="Expericence ">
        <MyExpericenceSection />
      </section>
    </>
  );
}
