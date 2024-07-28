import { TAGS } from './filters';
import langMap, { ILangMap } from './langs';

interface IProject {
    id: number;
    name: string;
    desc: string;
    langs: ILangMap[];
    tags: TAGS[];
    source: string;
    preview?: string;
}

const osProjects: Array<IProject> = [
    {
        id: 0,
        name: 'ML Sentiment Analysis (web client)',
        desc: "Developed a web client for a machine learning sentiment analysis + prediction software. It attempts to predict the sentiment behind a customer's review and classifies it as either positive, negative or neutral.",
        langs: [langMap[7], langMap[9]],
        tags: [TAGS.ALL, TAGS.ML, TAGS.FRONTEND, TAGS.FULLSTACK],
        source: 'https://github.com/dev-xero/ml-sentiment-analyzer-client',
        preview: 'https://ml-sentiment-analyzer.vercel.app/',
    },
    {
        id: 1,
        name: 'Sentiment Analysis Model + API',
        desc: 'Developed an ML model for analyzing product review sentiments using TensorFlow and a large public reviews dataset. Deployed as an API using the Flask web framework.',
        langs: [langMap[4], langMap[10]],
        tags: [TAGS.ALL, TAGS.ML, TAGS.FULLSTACK],
        source: 'https://github.com/dev-xero/sentiment-analysis-api',
    },
    {
        id: 3,
        name: 'SQLite C',
        desc: 'Implemented a prototype sqlite3 database using C as a proof of concept.',
        langs: [langMap[0]],
        tags: [TAGS.ALL, TAGS.LIBS],
        source: 'https://github.com/dev-xero/sqlitec',
    },
    {
        id: 4,
        name: '/ Home',
        desc: 'The third iteration of my website, written using React/NextJS and TailwindCSS. Built with speed and slickness in mind.',
        langs: [langMap[7], langMap[9]],
        tags: [TAGS.ALL, TAGS.FULLSTACK, TAGS.FRONTEND],
        source: 'https://github.com/dev-xero/home',
    },
    {
        id: 5,
        name: 'JSON Parser',
        desc: 'My implementation of the JSON file format recursive descent parser.',
        langs: [langMap[4]],
        tags: [TAGS.ALL, TAGS.LIBS],
        source: 'https://github.com/dev-xero/json-parser',
    },
    {
        id: 6,
        name: 'Sentiment Analysis (Android client)',
        desc: 'Built a mobile app using Kotlin and Compose to interact with my machine learning sentiment analysis web api.',
        langs: [langMap[5]],
        tags: [TAGS.ALL, TAGS.ANDROID, TAGS.ML],
        source: 'https://github.com/dev-xero/sentiment.ai-app',
    },
    {
        id: 7,
        name: 'Molla Backend System',
        desc: 'Developed a robust and scalable backend system for an E-commerce web application. Written in ExpressJS with TypeScript and uses MongoDB as the primary database.',
        langs: [langMap[7], langMap[8], langMap[9]],
        tags: [TAGS.ALL, TAGS.BACKEND, TAGS.FULLSTACK],
        source: 'https://github.com/dev-xero/molla-backend',
    },
    {
        id: 8,
        name: 'NoteRepo',
        desc: "I'm developing — along with some friends, a centralized study / lecture materials repository to help make organizing school work easier.",
        langs: [langMap[7], langMap[8], langMap[9]],
        tags: [TAGS.ALL, TAGS.FULLSTACK, TAGS.FRONTEND],
        source: 'https://github.com/NoteRepoLabs/noterepo-web-client',
    },
    {
        id: 9,
        name: 'jLox',
        desc: 'Java implementation of the Lox programming language from the Crafting Interpreters book, with some tweaks.',
        langs: [langMap[6]],
        tags: [TAGS.ALL, TAGS.LIBS],
        source: 'https://github.com/dev-xero/jLox',
    },
    {
        id: 10,
        name: 'wc',
        desc: 'My implementation of the popular wc Linux utility tool, written in pure C.',
        langs: [langMap[0]],
        tags: [TAGS.ALL, TAGS.LIBS],
        source: 'https://github.com/dev-xero/wc',
    },
    {
        id: 11,
        name: 'Email Web API',
        desc: "Proof of concept sending and receiving e-mails using Google's SMTP.",
        langs: [langMap[3]],
        tags: [TAGS.ALL, TAGS.LIBS, TAGS.BACKEND],
        source: 'https://github.com/dev-xero/go-email-api',
    },
    {
        id: 12,
        name: 'Email + Google Auth System',
        desc: 'Developed a robust and secure email + Google SSO authentication system using the Go programming language. PostgreSQL is the database of choice.',
        langs: [langMap[3]],
        tags: [TAGS.ALL, TAGS.BACKEND],
        source: 'https://github.com/dev-xero/go-auth-backend',
    },
    {
        id: 13,
        name: 'In-memory Todo List CLI',
        desc: 'Light-weight in-memory todo list command line application for the terminal geeks.',
        langs: [langMap[3]],
        tags: [TAGS.ALL, TAGS.LIBS],
        source: 'https://github.com/dev-xero/go-todo-cli',
    },
    {
        id: 14,
        name: 'Binomial Expansion Algorithm',
        desc: 'Python implementation of the binomial expansion algorithm, using a CLI.',
        langs: [langMap[4]],
        tags: [TAGS.ALL, TAGS.LIBS, TAGS.DSA],
        source: 'https://github.com/dev-xero/binomial-expansion-cli',
    },
    {
        id: 15,
        name: 'Shift Cipher Algorithm',
        desc: 'My implementation of the shift encryption algorithm.',
        langs: [langMap[2]],
        tags: [TAGS.ALL, TAGS.LIBS, TAGS.DSA],
        source: 'https://github.com/dev-xero/rust-shift-cipher',
    },
    {
        id: 16,
        name: 'Heap Implementation',
        desc: 'Efficient implementation of the computer science heap data structure.',
        langs: [langMap[2]],
        tags: [TAGS.ALL, TAGS.DSA],
        source: 'https://github.com/dev-xero/rust-heap-ds',
    },
    {
        id: 17,
        name: 'Hash Map Implementation',
        desc: 'I implemented a hash map from the ground up using a special form of open addressing hashing (linear probing) to handle collisions.',
        langs: [langMap[2]],
        tags: [TAGS.ALL, TAGS.DSA],
        source: 'https://github.com/dev-xero/rust-hash-tables',
    },
    {
        id: 18,
        name: 'Coffee Drop',
        desc: 'Designed a clean coffee app concept UI using Compose.',
        langs: [langMap[5]],
        tags: [TAGS.ALL, TAGS.ANDROID],
        source: 'https://github.com/dev-xero/coffee-drop-ui',
    },
    {
        id: 19,
        name: 'Paper',
        desc: 'Designed and developed an clean, minimal note taking app.',
        langs: [langMap[5]],
        tags: [TAGS.ALL, TAGS.ANDROID],
        source: 'https://github.com/dev-xero/paper-app',
    },
    {
        id: 20,
        name: 'Pokemon30',
        desc: 'Android UI pokemon themed challenge, details 20+ Gen I pokemon.',
        langs: [langMap[5]],
        tags: [TAGS.ALL, TAGS.ANDROID],
        source: 'https://github.com/dev-xero/pokemon-app',
    },
    {
        id: 21,
        name: 'Zip Cracker',
        desc: 'Proof of concept encrypted zip cracking using brute force. Multithreaded for increased efficiency.',
        langs: [langMap[4]],
        tags: [TAGS.ALL, TAGS.LIBS, TAGS.DSA],
        source: 'https://github.com/dev-xero/python-zip-cracker',
    },
    {
        id: 22,
        name: 'Parse Tree',
        desc: 'Implemented an abstract syntax tree for expression parsing.',
        langs: [langMap[4]],
        tags: [TAGS.ALL, TAGS.LIBS, TAGS.DSA],
        source: 'https://github.com/dev-xero/python-parse-tree',
    },
];

export default osProjects;
