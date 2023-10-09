import { Box, Grid, TablePagination } from '@mui/material';
import React, { FC } from 'react';
import { Container } from 'shared/container/container';
import { useGetPokemonByTypeQuery, useGetPokemonQuery } from '../../services';
import { useDebounce, useServerError } from '../../hooks';
import { LoadingButton } from '@mui/lab';
import { usePagination } from '../../hooks/usePagination';
import { useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { PokemonSection } from './pokemon.section';
import { TypeMenu } from '../../components/type_menu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.light, 0.6),
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.light, 0.8),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export const HomePage: FC = () => {
  const { onChangeRowsPerPage, onChangePage, pagination, onSearch } =
    usePagination();

  const location = useLocation();

  const searchDebounce = useDebounce(pagination.search, 500);

  const filterType: string = location?.state?.type || '';

  const {
    data: pokemonData,
    isError: pokemonIsError,
    isFetching,
  } = useGetPokemonQuery(
    {
      limit: pagination.rowsPerPage,
      offset: pagination.page * pagination.rowsPerPage,
      search: searchDebounce || '',
    },
    { skip: !!filterType && !searchDebounce }
  );

  const {
    data: pokemonByTypeData,
    error: pokemonByTypeError,
    isError: pokemonByTypeIsError,
    isFetching: pokemonByTypeIsFetching,
  } = useGetPokemonByTypeQuery(
    {
      type: filterType,
    },
    { skip: !filterType }
  );

  useServerError({
    isError: pokemonByTypeIsError,
    error: pokemonByTypeError,
  });

  return (
    <Container sx={{ background: 'transparent' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
          mb: 3,
          gap: '10px',
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={onSearch}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <TypeMenu />
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {searchDebounce ? (
          <PokemonSection
            pokemons={[pokemonData as any]}
            isFetching={isFetching}
            notFoundText={`There are no results for ${searchDebounce}`}
            pokemonIsError={pokemonIsError}
          />
        ) : !filterType ? (
          <PokemonSection
            pokemons={pokemonData?.results}
            isFetching={isFetching}
          />
        ) : (
          <PokemonSection
            pokemons={pokemonByTypeData?.pokemon}
            isFetching={pokemonByTypeIsFetching}
          />
        )}
      </Grid>
      {!filterType && !searchDebounce && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            mt: 3,
          }}
        >
          <LoadingButton
            loading={isFetching}
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            sx={{
              background: 'white',
              cursor: 'default',
              '&:hover': { background: 'white' },
              opacity: isFetching ? 0.4 : 1,
            }}
          >
            {searchDebounce ? null : (
              <TablePagination
                component="div"
                rowsPerPageOptions={[10, 15, 20]}
                count={pokemonData?.count as number}
                rowsPerPage={pagination.rowsPerPage}
                page={pagination.page}
                onPageChange={onChangePage}
                onRowsPerPageChange={onChangeRowsPerPage}
              />
            )}
          </LoadingButton>
        </Box>
      )}
    </Container>
  );
};
