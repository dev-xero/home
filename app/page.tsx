import Container from "@/components/Container";
import Header from "@/components/ui/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Container>
        <>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    </Container>
  );
}
