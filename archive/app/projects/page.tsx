import Container from '@/components/Container';
import ProjectsPage from '@/components/pages/ProjectsPage';
import Header from '@/components/ui/Header';

export default function Page() {
    return (
        <Container>
            <>
                <Header active="projects" aboutRedirect="/about" />
                <ProjectsPage />
            </>
        </Container>
    );
}
