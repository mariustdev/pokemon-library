import {IPokemonFilter} from "../../commons/interfaces/PokemonFilter";
import {Pokemon} from "pokenode-ts";

export const filterPokemonList = (filter: IPokemonFilter, pokemonList: Pokemon[] | null): Pokemon[] => {
    // Early return if the list is null or filter criteria are not specified
    let filteredPokemonList: Pokemon[] = [];
    if (!pokemonList || (!filter.name && !filter.type)) {
        return pokemonList || [];
    }

    filteredPokemonList = pokemonList.filter((pokemon) => {
        const matchesName = filter.name ? pokemon.name.toLowerCase().includes(filter.name.toLowerCase()) : true;
        const matchesType = filter.type ? pokemon.types.some((type) => type.type.name.toLowerCase() === filter?.type?.toLowerCase()) : true;

        return matchesName && matchesType;
    });

    return filteredPokemonList;
};
