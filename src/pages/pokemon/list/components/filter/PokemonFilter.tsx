import {FC} from "react";
import PokemonFilterInput from "./PokemonFilterInput";
import PokemonFilterTypeSelect from "./PokemonFilterTypeSelect";

const PokemonFilter: FC = () => {
    return (
        <div className="bg-white px-1 py-2 sticky top-0 z-50">
            <div className="mx-auto">
                <div className="text-lg font-semibold">Pokedex</div>
                <div className="grid gap-x-4 grid-cols-6 items-center">
                    <PokemonFilterInput />
                    <PokemonFilterTypeSelect />
                </div>
            </div>
            <div className="border-b border-gray-300 pb-5"></div>
        </div>
    )
}

export default PokemonFilter;
