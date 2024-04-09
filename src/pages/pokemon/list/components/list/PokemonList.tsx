import {FC} from "react";
import {Pokemon} from "pokenode-ts";
import {Each} from "../../../../../commons/components/Each";
import PokemonListItem from "./PokemonListItem";

interface IPokemonListProps {
    pokemonList: Pokemon[];
}

const PokemonList:FC<IPokemonListProps> = ({pokemonList}) => (
    <ul role="list" className="divide-y divide-gray-100">
        <Each of={pokemonList} render={(pokemon) =>
            <PokemonListItem pokemon={pokemon} />
        } />
    </ul>
);

export default PokemonList;
