import {createContext, FC, ReactNode, useMemo, useState} from "react";

import {IPokemonFilter} from "../../commons/interfaces/PokemonFilter";
import {useFetchPokemonList} from "../hooks/useFetchPokemonList";
import {Pokemon} from "pokenode-ts";
import {filterPokemonList} from "../functions/filterPokemonList";

interface IPokemonContextType {
    filter: IPokemonFilter | null;
    setFilter: (newFilter: IPokemonFilter) => void;
    list: Pokemon[];
    isLoading: boolean;
}

export const PokemonContext = createContext<IPokemonContextType>(null!);

export const PokemonContextProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [filter, setFilter] = useState<IPokemonFilter | null>(null);
    const {isLoading, pokemonList} = useFetchPokemonList();

    const filteredPokemonList = useMemo(() => filterPokemonList(filter, pokemonList), [filter, pokemonList]);

    const globalObj = {
        filter,
        setFilter,
        isLoading,
        list: filteredPokemonList
    };

    return <PokemonContext.Provider value={globalObj}>{children}</PokemonContext.Provider>;
}
