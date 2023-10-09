import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { PokemonCard } from '../../components';

import { NoItemsWrapper } from '../../shared';
import { PokemonTypesResObjInterface } from '../../types/pokemon.types.interface';

type PokemonSectionProps = {
  pokemons: PokemonTypesResObjInterface[] | undefined;
  isFetching?: boolean;
  notFoundText?: string;
  pokemonIsError?: boolean;
};
export const PokemonSection: FC<PokemonSectionProps> = ({
  pokemons = [],
  isFetching = false,
  notFoundText = 'There are no pokemons',
  pokemonIsError = false,
}) => {
  return (
    <NoItemsWrapper
      length={!pokemonIsError && !isFetching ? (pokemons?.length as number) : 0}
      isLoading={!pokemons?.length && isFetching}
      text={notFoundText}
    >
      {pokemons?.map((el, index) => (
        <Grid
          sx={{ display: 'flex', justifyContent: 'center' }}
          item
          xs={12}
          md={4}
          sm={6}
          xl={3}
          key={index}
        >
          <PokemonCard pokemon={el} />
        </Grid>
      ))}
    </NoItemsWrapper>
  );
};
