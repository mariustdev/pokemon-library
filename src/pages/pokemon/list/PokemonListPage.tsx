import {FC} from "react";
import PokemonList from "./components/list/PokemonList";
import PokemonFilter from "./components/filter/PokemonFilter";

const PokemonListPage: FC = () => (
    <div className={'px-4 py-2'}>
        <PokemonFilter/>
        <PokemonList/>
    </div>
);

export default PokemonListPage;
