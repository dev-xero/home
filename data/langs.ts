interface ILangMap {
    name: string;
    spec: LANG;
}

enum LANG {
    C = '#6A6E7D',
    CPP = '#E6656D',
    RUST = '#F7886F',
    GO = '#6FC6F7',
    PYTHON = '#6A85E5',
    KOTLIN = '#BA73F2',
    JAVA = '#DA8E56',
    TS = '#3B94FC',
    JS = '#FCF773',
    NODE = '#6FF78D',
    JUPYTER = '#FA983E',
}

/**
 * 0 -> C
 * 1 -> C++
 * 2 -> Rust
 * 3 -> Go
 * 4 -> Python
 * 5 -> Kotlin
 * 6 -> Java
 * 7 -> TS
 * 8 -> JS
 * 9 -> Node
 * 10 -> Jupyter
 */
const langMap: Array<ILangMap> = [
    {
        name: 'C',
        spec: LANG.C,
    },
    {
        name: 'C++',
        spec: LANG.CPP,
    },
    {
        name: 'Rust',
        spec: LANG.RUST,
    },
    {
        name: 'Go',
        spec: LANG.GO,
    },
    {
        name: 'Python',
        spec: LANG.PYTHON,
    },
    {
        name: 'Kotlin',
        spec: LANG.KOTLIN,
    },
    {
        name: 'Java',
        spec: LANG.JAVA,
    },
    {
        name: 'Typescript',
        spec: LANG.TS,
    },
    {
        name: 'Javascript',
        spec: LANG.JS,
    },
    {
        name: 'NodeJS',
        spec: LANG.NODE,
    },
    {
        name: 'Jupyter Notebook',
        spec: LANG.JUPYTER,
    },
];

export type { ILangMap };
export default langMap;
