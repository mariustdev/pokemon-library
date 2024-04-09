import {NamedAPIResource} from "pokenode-ts";

export const getPokemonTypesName = (types: NamedAPIResource[]): string[] => types.map((type) => type.name);
