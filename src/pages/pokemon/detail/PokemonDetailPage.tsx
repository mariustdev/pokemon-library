import {FC} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useFetchPokemon} from "../../../utils/hooks/useFetchPokemon";
import LoadingContainer from "../../../commons/components/LoadingContainer";
import ErrorContainer from "../../../commons/components/ErrorContainer";
import CloseIconNavigate from "../../../commons/components/CloseIconNavigate";
import {getPokemonImageUrl} from "../../../utils/functions/getPokemonImageUrl";
import PokemonDetailSpecifications from "./components/PokemonDetailSpecifications";
import PokemonDetailTypes from "./components/PokemonDetailTypes";
import PokemonDetailMoves from "./components/PokemonDetailMoves";


const PokemonDetailPage: FC = () => {
    const navigate = useNavigate();
    const {pokemonId} = useParams();
    const {pokemon, isLoading, error} = useFetchPokemon(pokemonId);

    if (isLoading) return <LoadingContainer />;

    if (error || !pokemon) return <>
        <ErrorContainer errorMessage={error?.message}/>
        <CloseIconNavigate navigate={navigate}/>
    </>;

    return (
        <div className="bg-white rounded-lg p-6 w-full mx-auto">
            <div className="flex items-start">
                <div className="flex-grow">
                    <h2 className="font-bold text-xl">{pokemon.name}</h2>
                    <PokemonDetailSpecifications weight={pokemon.weight} height={pokemon.height} baseExperience={pokemon.base_experience} />
                    <PokemonDetailTypes types={pokemon.types} />
                </div>
                <img className="h-40 w-40 sm:h-52 sm:w-52 flex-none bg-gray-50 mt-6 object-contain" src={getPokemonImageUrl(pokemon.sprites)} alt="Pokemon image" />
            </div>
            <PokemonDetailMoves moves={pokemon.moves} />
            <CloseIconNavigate navigate={navigate} />
        </div>
    )
}

export default PokemonDetailPage;
