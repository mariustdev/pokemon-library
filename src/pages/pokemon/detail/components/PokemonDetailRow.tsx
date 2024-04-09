import {FC} from "react";

interface IPokemonDetailRowProps {
    label: string;
    value: string | number;
}
const PokemonDetailRow: FC<IPokemonDetailRowProps> = ({label, value}) => (
    <div className="flex gap-2">
        {label && <span className="label">{label}:</span>}
        <span className="value">{value}</span>
    </div>
);

export default PokemonDetailRow;
