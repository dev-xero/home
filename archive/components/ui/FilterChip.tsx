import { TAGS } from '@/data/filters';

interface FilterChipProps {
    text: string;
    id: TAGS;
    isSelected: boolean;
    onClick: () => void;
}

export default function FilterChip({ text, isSelected, onClick }: FilterChipProps) {
    return (
        <div
            className={`select-none text-sm cursor-pointer px-6 py-2 border-2 ${isSelected ? 'border-green text-green bg-green bg-opacity-10 font-bold' : 'bg-bg-dark text-grey-050 border-grey-050 transition-colors hover:text-green hover:border-green border-opacity-70'}`}
            onClick={onClick}
        >
            <span>{text}</span>
        </div>
    );
}
