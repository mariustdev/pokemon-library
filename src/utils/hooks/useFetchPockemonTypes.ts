import {useEffect, useState} from "react";
import {pokemonApi} from "../../main";
import {getPokemonTypesName} from "../functions/getPokemonTypesName";

interface IUseFetchPokemonTypesReturn {
    pokemonTypes: string[];
    isLoading: boolean;
    error: Error | null;
}

export const useFetchPokemonTypes = (): IUseFetchPokemonTypesReturn => {
    const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPokemonTypes = async () => {
            setIsLoading(true);
            try {
                // First, get the list of Pokémon names or URLs
                const listResponse  = await pokemonApi.listTypes();
                if (!listResponse?.results) {
                    throw new Error(`An error occurred`);
                }
                setError(null);
                setPokemonTypes(getPokemonTypesName(listResponse.results));
            } catch (e) {
                const fetchError = e instanceof Error ? e : new Error('An unknown error occurred');
                setError(fetchError);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPokemonTypes();
    }, []);
    return { pokemonTypes, isLoading, error };
};
