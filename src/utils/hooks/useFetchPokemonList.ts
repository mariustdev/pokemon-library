import {useEffect, useState} from "react";
import {Pokemon} from "pokenode-ts";
import {pokemonApi} from "../../main";
import {extractPokemonId} from "../functions/getExactPockemonId";

interface IUseFetchPokemonListReturn {
    pokemonList: Pokemon[] | null;
    isLoading: boolean;
    error: Error | null;
}

export const useFetchPokemonList = (): IUseFetchPokemonListReturn => {
    const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPokemonList = async () => {
            setIsLoading(true);
            try {
                // First, get the list of Pokémon ids from URLs
                const listResponse  = await pokemonApi.listPokemons(0, 10);
                const pokemonIds: number[] = listResponse.results.map(p => {
                    const id = extractPokemonId(p.url);
                    return id ? id : 0
                });

                // Then, fetch details for each Pokémon concurrently
                const detailPromises = pokemonIds.map(id => pokemonApi.getPokemonById(id));
                const details = await Promise.all(detailPromises);
                if (!details) {
                    throw new Error(`An error occurred`);
                }
                setError(null);
                setPokemonList(details);
            } catch (e) {
                const fetchError = e instanceof Error ? e : new Error('An unknown error occurred');
                setError(fetchError);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPokemonList();
    }, []);
    return { pokemonList, isLoading, error };
};
