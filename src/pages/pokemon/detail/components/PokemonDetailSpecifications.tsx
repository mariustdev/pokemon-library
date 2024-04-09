import {FC} from "react";
import PokemonDetailRow from "./PokemonDetailRow";

interface IPokemonDetailSpecificationsProps {
    height: number;
    weight: number;
    baseExperience: number;
}
const PokemonDetailSpecifications: FC<IPokemonDetailSpecificationsProps> = ({height, weight, baseExperience}) => (
    <div className="text-gray-700 text-base mb-1 pt-6">
        <div className="text-2xl mb-2">Specifications:</div>
        <PokemonDetailRow label={'Height'} value={height}/>
        <PokemonDetailRow label={'Weight'} value={weight}/>
        <PokemonDetailRow label={'Base experience'} value={baseExperience}/>
    </div>
);

export default PokemonDetailSpecifications;
