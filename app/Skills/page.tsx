import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";

export default function page() {
  return (
    < >
      <header className="">
        <Navbar />
      </header>
      <main>
        <section id="skills" className="skills mx-4 md:mx-20">
          <SkillsSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
