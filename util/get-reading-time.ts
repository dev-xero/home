import readingDuration from 'reading-duration';

const getReadingTime = (content: string) => {
    const readingTime = readingDuration(content, {
        wordsPerMinute: 100,
    });
    return readingTime;
};

export default getReadingTime;