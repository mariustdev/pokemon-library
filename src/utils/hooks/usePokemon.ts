import {useContext} from "react";
import {PokemonContext} from "../providers/PokemonProvider";

export function usePokemon() {
    return useContext(PokemonContext);
}
