import {FC, useEffect, useState} from "react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useNavigate, useParams} from "react-router-dom";
import {usePokemon} from "../../../utils/hooks/usePokemon";
import {Pokemon} from "pokenode-ts";


const PokemonDetailPage: FC = () => {
    const navigate = useNavigate();
    const {pokemonId} = useParams();
    const {getPokemonById} = usePokemon();
    const [pokemon, setPokemon] = useState<Pokemon | undefined>();

    useEffect(() => {
        if (pokemonId) {
            const pokemon = getPokemonById(+pokemonId);
            if (!pokemon) {
                throw new Response("", {
                    status: 404,
                    statusText: "Not Found",
                });
            }
            setPokemon(pokemon);
        }
    }, [pokemonId, getPokemonById]);

    console.log(pokemon)
    return (
        <div>Pokemon Detail Page
            <button className={'p-1 absolute top-3 right-3'} onClick={() => navigate(`/`)}>
                <XMarkIcon className="h-8 w-8" aria-hidden="true"/>
            </button>
        </div>
    )
}

export default PokemonDetailPage;
