import { TAGS } from './filters';
import langMap, { ILangMap } from './langs';

interface IProject {
    id: number,
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
        desc: 'Developed a web client for a machine learning sentiment analysis + prediction software. It attempts to predict the sentiment behind a customer\'s review and classifies it as either positive, negative or neutral.',
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
];

export default osProjects;
