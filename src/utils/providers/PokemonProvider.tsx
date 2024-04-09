import {createContext, FC, ReactNode, useMemo, useState} from "react";

import {IPokemonFilter} from "../../commons/interfaces/PokemonFilter";
import {useFetchPokemonList} from "../hooks/useFetchPokemonList";
import {Pokemon} from "pokenode-ts";
import {filterPokemonList} from "../functions/filterPokemonList";
import {useFetchPokemonTypes} from "../hooks/useFetchPockemonTypes";
import {PokemonFilterDefault} from "../../commons/defaults/PokemonFilterDefault";

interface IPokemonContextType {
    filter: IPokemonFilter;
    setFilter: (newFilter: IPokemonFilter) => void;
    list: Pokemon[];
    types: string[];
    isListLoading: boolean;
    isTypesLoading: boolean;
    getPokemonById: (id: number) => Pokemon | undefined;
    listError: Error | null;
    typesError: Error | null;
}

export const PokemonContext = createContext<IPokemonContextType>(null!);

export const PokemonContextProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [filter, setFilter] = useState<IPokemonFilter>(PokemonFilterDefault);
    const {isLoading: isListLoading, pokemonList, error: listError} = useFetchPokemonList();
    const {isLoading: isTypesLoading, pokemonTypes, error: typesError} = useFetchPokemonTypes();

    const filteredPokemonList = useMemo(() => filterPokemonList(filter, pokemonList), [filter, pokemonList]);

    // Avoid getting new data and use stored data from context (if needed)
    const getPokemonById = (id: number): Pokemon | undefined => filteredPokemonList.find((pokemon) => pokemon.id === id);

    const globalObj = {
        filter,
        setFilter,
        isListLoading,
        isTypesLoading,
        list: filteredPokemonList,
        types: pokemonTypes,
        getPokemonById,
        listError,
        typesError,
    };

    return <PokemonContext.Provider value={globalObj}>{children}</PokemonContext.Provider>;
}
