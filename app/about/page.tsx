import AboutPage from '@/components/pages/AboutPage';
import Container from '@/components/Container';
import Header from '@/components/ui/Header';
import PageTransition from '@/layouts/PageTransition';
import { slideUpVariants } from '@/animated/slideup';

export default function Page() {
    return (
        <Container>
            <>
                <Header active="about" projectRedirect="/projects" />
                <PageTransition animationVariants={slideUpVariants}>
                    <AboutPage />
                </PageTransition>
            </>
        </Container>
    );
}
