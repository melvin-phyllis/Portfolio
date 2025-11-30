import Footer from "@/components/Footer";
import MyProjectsSection from "@/components/MyProjectsSection";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    < >
      <header className="">
        <Navbar />
      </header>
      <main>
        <section id="experience" className="Expericence ">
          <MyProjectsSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
