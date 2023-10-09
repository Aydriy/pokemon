import { baseApi } from './base.api';
import { PokemonTypesInterface } from '../types/pokemon.types.interface';
import { PATH_POKEMON_API } from '../constants/api-routes';

export const pokemonService = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemonTypes: build.query<PokemonTypesInterface, {}>({
      query: (params) => ({
        url: `${PATH_POKEMON_API.TYPE}`,
        params,
      }),
    }),
    getPokemonByType: build.query<PokemonTypesInterface, { type?: string }>({
      query: ({ type }) => ({
        url: `${PATH_POKEMON_API.TYPE}/${type}`,
      }),
    }),
    getPokemon: build.query<
      PokemonTypesInterface,
      { limit?: number; offset?: number; search?: string }
    >({
      query: ({ limit, offset, search }) => ({
        url: `${PATH_POKEMON_API.POKEMON}/${search}`,
        params: {
          offset,
          limit,
        },
      }),
    }),
  }),
});

export const {
  useGetPokemonTypesQuery,
  useGetPokemonQuery,
  useGetPokemonByTypeQuery,
} = pokemonService;
