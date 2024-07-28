import { ILangMap } from '@/data/langs';

interface LangChipProps {
    details: ILangMap;
    key: number;
}

export default function LangChip({ details, key }: LangChipProps) {
    return (
        <div className="flex gap-2 items-center" key={key}>
            <div
                className={`w-2 h-2 rounded-lg`}
                style={{ backgroundColor: details.spec }}
            ></div>
            <span className="text-sm text-grey-050">{details.name}</span>
        </div>
    );
}
