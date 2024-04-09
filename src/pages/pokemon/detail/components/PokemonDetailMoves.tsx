import {FC} from "react";
import PokemonDetailRow from "./PokemonDetailRow";
import {PokemonMove} from "pokenode-ts";
import {Each} from "../../../../commons/components/Each";
import {capitalizeFirstChar} from "../../../../utils/functions/capitalizeFirstChar";

interface IPokemonDetailMovesProps {
   moves: PokemonMove[];
}
const PokemonDetailMoves: FC<IPokemonDetailMovesProps> = ({moves}) => (
    <div className="text-gray-700 text-base mb-4 pt-6">
        <div className="text-2xl mb-2">Moves:</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-5">
            <Each of={moves} render={(move) => <PokemonDetailRow key={move.move.name} label={''} value={capitalizeFirstChar(move.move.name)}/>}/>
        </div>
    </div>
);

export default PokemonDetailMoves;
