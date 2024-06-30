import About from "@/Components/Section/About";
import Contact from "@/Components/Section/Contact";
import Footer from "@/Components/Section/Footer";
import Hero from "@/Components/Section/Hero";
import Menu from "@/Components/Section/Menu";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
