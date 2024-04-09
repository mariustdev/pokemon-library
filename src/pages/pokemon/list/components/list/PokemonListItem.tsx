import {FC} from "react";
import {Pokemon} from "pokenode-ts";
import {getPokemonImageUrl} from "../../../../../utils/functions/getPokemonImageUrl";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import {useNavigate} from "react-router-dom";
interface IPokemonListItem {
    pokemon: Pokemon;
}
const PokemonListItem: FC<IPokemonListItem> = ({pokemon}) => {
    const navigate = useNavigate();
    return (
        <li key={pokemon.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={getPokemonImageUrl(pokemon.sprites)} alt="Pokemon image" />
                <div className="min-w-0 flex flex-auto items-center">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{pokemon.name}</p>
                </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:justify-center">
                <button className={'p-1'} onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
                    <ArrowRightIcon className="h-6 w-6" aria-hidden="true"/>
                </button>
            </div>
        </li>
    )
}

export default PokemonListItem;
