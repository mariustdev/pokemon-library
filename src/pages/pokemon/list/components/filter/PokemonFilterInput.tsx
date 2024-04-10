import {FC} from "react";
import {usePokemon} from "../../../../../utils/hooks/usePokemon";

const PokemonFilterInput: FC = () => {
    const {filter, setFilter} = usePokemon();

    return (
        <div className="col-span-4">
            <div className="mt-2">
                <input
                    id="search"
                    name="text"
                    type="text"
                    value={filter.name}
                    onChange={(e) => setFilter({...filter, name: e.target.value})}
                    placeholder={'Search for pokemon'}
                    className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
            </div>
        </div>
    )
}

export default PokemonFilterInput;
