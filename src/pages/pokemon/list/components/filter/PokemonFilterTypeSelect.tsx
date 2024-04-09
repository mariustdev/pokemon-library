import {FC} from "react";
import {usePokemon} from "../../../../../utils/hooks/usePokemon";
import {Each} from "../../../../../commons/components/Each";
import {capitalizeFirstChar} from "../../../../../utils/functions/capitalizeFirstChar";

const PokemonFilterTypeSelect: FC = () => {
    const {filter, setFilter, types} = usePokemon();

    return (
        <div className="col-span-2">
            <div className="mt-2">
                <select id="country" value={filter.type} onChange={(e) => setFilter({...filter, type: e.target.value})} name="country" autoComplete="country-name" className="block w-full rounded-md border-0 p-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 outline-0">
                    <option value={''}>Select type</option>
                    <Each of={types} render={(type) => <option key={type} value={type}>{capitalizeFirstChar(type)}</option>} />
                </select>
            </div>
        </div>
    )
}

export default PokemonFilterTypeSelect;
