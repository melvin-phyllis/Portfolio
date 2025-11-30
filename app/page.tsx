import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import MyExpericenceSection from "@/components/MyExpericenceSection";
import MyProjectsSection from "@/components/MyProjectsSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    < >
      <header className="">
        <Navbar />
      </header>
      <main>
        <section id="hero" className="hero-1 mx-4 md:mx-20 mt-20">
          <HeroSection />
        </section>
        {/* <section id="skills" className="skills mx-4 md:mx-20">
          <SkillsSection />
        </section>
        <section id="experience" className="Expericence ">
          <MyExpericenceSection />
        </section>
        <section id="about" className="About ">
          <AboutSection />
        </section>
        <section id="projects" className="Projec">
          <MyProjectsSection />
        </section> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
