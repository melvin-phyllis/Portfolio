import Footer from "@/components/Footer";
import MyExpericenceSection from "@/components/MyExpericenceSection";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    < >
      <header className="">
        <Navbar />
      </header>
      <main>
        <section id="experience" className="Expericence ">
          <MyExpericenceSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
