import About from '@/components/About';
import Container from '@/components/Container';
import Header from '@/components/ui/Header';

export default function Page() {
    return (
        <Container>
            <>
                <Header active="about" />
                <About />
            </>
        </Container>
    );
}
