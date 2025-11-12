import Container from '@/components/Container';
import Header from '@/components/ui/Header';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
import PageTransition from '@/layouts/PageTransition';
import { slideUpVariants } from '@/animated/slideup';

export default function Home() {
    return (
        <Container>
            <>
                <Header active="home" />
                <PageTransition animationVariants={slideUpVariants}>
                    <Intro />
                </PageTransition>
                <PageTransition animationVariants={slideUpVariants}>
                    <Skills />
                </PageTransition>
                <PageTransition animationVariants={slideUpVariants}>
                    <Projects />
                </PageTransition>
                <PageTransition animationVariants={slideUpVariants}>
                    <>
                        <Contact />
                        <Footer />
                    </>
                </PageTransition>
            </>
        </Container>
    );
}
