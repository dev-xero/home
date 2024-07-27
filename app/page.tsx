import Container from "@/components/Container";
import Header from "@/components/ui/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Container>
        <>
            <Header />
            <About />
            <Skills />
        </>
    </Container>
  );
}
