import {FC} from "react";
import {Each} from "../../../../../commons/components/Each";
import PokemonListItem from "./PokemonListItem";
import {usePokemon} from "../../../../../utils/hooks/usePokemon";
import NoResultsContainer from "../../../../../commons/components/NoResultsContainer";
import LoadingContainer from "../../../../../commons/components/LoadingContainer";
import ErrorContainer from "../../../../../commons/components/ErrorContainer";

const PokemonList:FC = () => {
    const {list, isListLoading, listError} = usePokemon();

    if (isListLoading) return <LoadingContainer />;

    if (listError) return <ErrorContainer errorMessage={listError.message}/>;

    if (list.length === 0) return <NoResultsContainer />;

    return (
        <ul role="list" className="divide-y divide-gray-100">
            <Each of={list} render={(pokemon) =>
                <PokemonListItem pokemon={pokemon} />
            } />
        </ul>
    )
}



export default PokemonList;
