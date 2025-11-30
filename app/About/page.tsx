import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    < >
      <header className="">
        <Navbar />
      </header>
      <main>

        <section id="about" className="About ">
          <AboutSection />
        </section>

      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
