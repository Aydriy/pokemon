export interface PokemonTypesResObjInterface {
  name: string;
  url: string;
  pokemon: { name: string; url: string };
  slot: number;
}

export interface PokemonStatsInterface {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface PokemonMovesInterface {
  move: {
    name: string;
    url: string;
  };
}

export interface PokemonTypesInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonTypesResObjInterface[];
  pokemon: PokemonTypesResObjInterface[];
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  name: string;
  stats: PokemonStatsInterface[];
  moves: PokemonMovesInterface[];
}
