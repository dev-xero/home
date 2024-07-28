import { TAGS } from './filters';
import langMap, { ILangMap } from './langs';

interface IProject {
    name: string;
    desc: string;
    langs: ILangMap[];
    tags: TAGS[];
    source: string;
    preview?: string;
}

const osProjects: Array<IProject> = [
    {
        name: 'ML Sentiment Analysis (web client)',
        desc: 'Developed a web client for a machine language sentiment analysis + prediction software.',
        langs: [langMap[7], langMap[9]],
        tags: [TAGS.ML, TAGS.FULLSTACK],
        source: 'https://github.com/dev-xero/ml-sentiment-analyzer-client',
        preview: 'https://ml-sentiment-analyzer.vercel.app/',
    },
    {
        name: 'Sentiment Analysis Model + API',
        desc: 'Developed an ML model for analyzing product review sentiments using TensorFlow and a large public reviews dataset. Deployed as an API using the Flask web framework.',
        langs: [langMap[4], langMap[10]],
        tags: [TAGS.ML, TAGS.FULLSTACK],
        source: 'https://github.com/dev-xero/sentiment-analysis-api',
    },
    {
        name: 'SQLite C',
        desc: 'Implemented a prototype sqlite3 database using C as a proof of concept.',
        langs: [langMap[0]],
        tags: [TAGS.LIBS],
        source: 'https://github.com/dev-xero/sqlitec',
    },
];

export default osProjects;
