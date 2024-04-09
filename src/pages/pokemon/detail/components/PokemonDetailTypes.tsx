import {FC} from "react";
import PokemonDetailRow from "./PokemonDetailRow";
import {Each} from "../../../../commons/components/Each";
import {capitalizeFirstChar} from "../../../../utils/functions/capitalizeFirstChar";
import {PokemonType} from "pokenode-ts";

interface IPokemonDetailTypesProps {
    types: PokemonType[];
}
const PokemonDetailTypes: FC<IPokemonDetailTypesProps> = ({types}) => (
    <div className="text-gray-700 text-base mb-1 pt-6">
        <div className="text-2xl mb-2">Types:</div>
        <Each of={types} render={(type) => <PokemonDetailRow key={type.type.name} label={''} value={capitalizeFirstChar(type.type.name)}/>}/>
    </div>
);

export default PokemonDetailTypes;
