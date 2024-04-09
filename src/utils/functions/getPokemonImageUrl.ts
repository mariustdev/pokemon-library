import {PokemonSprites} from "pokenode-ts";

export const getPokemonImageUrl= (sprites: PokemonSprites) : string | undefined  => sprites?.other?.dream_world?.front_default || sprites.front_default || undefined;
