import {IPokemonFilter} from "../../commons/interfaces/PokemonFilter";
import {Pokemon} from "pokenode-ts";

export const filterPokemonList = (filter: IPokemonFilter | null, pokemonList: Pokemon[] | null) : Pokemon[] => {
    // here will come the logic to filter results
    let filteredPokemonList: Pokemon[] = [];

    if (!filter) {
        filteredPokemonList = pokemonList || [];
    } else {
        //some filtering logic goes here
    }

    return filteredPokemonList;
};
