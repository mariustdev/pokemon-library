import {useEffect, useState} from "react";
import {pokemonApi} from "../../main";
import {Pokemon} from "pokenode-ts";

interface IUseFetchPokemonReturn {
    pokemon: Pokemon | undefined;
    isLoading: boolean;
    error: Error | null;
}

export const useFetchPokemon = (id: string | undefined): IUseFetchPokemonReturn => {
    const [pokemon, setPokemon] = useState<Pokemon | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchPokemon = async () => {
            setIsLoading(true);
            try {
                // First, get the list of Pokémon names or URLs
                const response  = await pokemonApi.getPokemonById(Number(id));
                if (!response) {
                    throw new Error(`An error occurred`);
                }
                setError(null);
                setPokemon(response);
            } catch (e) {
                const fetchError = e instanceof Error ? e : new Error('An unknown error occurred');
                setError(fetchError);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPokemon();
    }, [id]);
    return { pokemon, isLoading, error };
};
