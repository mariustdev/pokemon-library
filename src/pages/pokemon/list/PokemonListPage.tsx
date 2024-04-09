import {FC} from "react";
import PokemonList from "./components/list/PokemonList";
import {usePokemon} from "../../../utils/hooks/usePokemon";
import PokemonFilter from "./components/filter/PokemonFilter";

const PokemonListPage: FC = () => {
    const {list} = usePokemon();

    return (
        <div className={'px-4 py-2'}>
            <PokemonFilter />
            <PokemonList pokemonList={list} />
        </div>
    )
}

export default PokemonListPage;
