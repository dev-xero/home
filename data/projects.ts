interface IProject {
    title: string,
    source: string,
    external?: string,
    type: "app" | "site"
}

const projectsData: Array<IProject> = [
    {
        title: "ML Sentiment Analysis (web client)",
        source: "https://github.com/dev-xero/ml-sentiment-analyzer-client",
        external: "https://ml-sentiment-analyzer.vercel.app/",
        type: "site"
    },
    {
        title: "Molla — E-commerce web app (backend)",
        source: "https://github.com/dev-xero/molla-backend",
        external: "https://molla-frontend.vercel.app/",
        type: "site"
    },
    {
        title: "NoteRepo — all your study materials in one place",
        source: "https://github.com/NoteRepoLabs",
        external: "https://www.noterepo.com.ng/",
        type: "site"
    },
    {
        title: "Go authentication server (Google signin + email API)",
        source: "https://github.com/dev-xero/go-auth-backend",
        external: "https://go-auth-backend.onrender.com/",
        type: "site"
    },
    {
        title: "Paper — minimal note taking app (android)",
        source: "https://github.com/dev-xero/paper-app",
        external: "https://github.com/dev-xero/paper-app/releases/download/v1.0/paper-v1.0.apk",
        type: "app"
    },
]

export default projectsData