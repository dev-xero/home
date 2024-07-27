import Container from "@/components/Container";
import Header from "@/components/ui/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <Container>
        <>
            <Header active="none" />
            <Intro />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    </Container>
  );
}
