import About from '@/components/pages/AboutPage';
import Container from '@/components/Container';
import Header from '@/components/ui/Header';

export default function Page() {
    return (
        <Container>
            <>
                <Header
                    active="about"
                    projectRedirect="/projects"
                />
                <About />
            </>
        </Container>
    );
}
