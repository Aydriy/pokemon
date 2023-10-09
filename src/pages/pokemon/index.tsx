import { Paper, styled, Box, Button, Divider, Grid } from '@mui/material';
import React, { FC, memo } from 'react';
import { Container } from 'shared/container/container';
import { NavLink, useParams } from 'react-router-dom';
import { useGetPokemonQuery } from '../../services';
import pokemonLable from '../../assets/img/pokemonLableBlue.png';
import { colorsType } from '../../constants/colors';
import Typography from '@mui/material/Typography';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { TypeButton } from '../../components/buttons_collection/type.button';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}));

const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  alignItems: 'flex-start',
  width: '100%',
}));

export const PokemonPage: FC = memo(() => {
  const { id } = useParams();

  const { data: pokemonData } = useGetPokemonQuery(
    {
      search: id || '',
    },
    { skip: !id }
  );

  const typesListColors =
    pokemonData?.types?.map((el) => `#${colorsType[el.type.name]}`) || [];

  const gradientColors = typesListColors?.join(', ');

  const imageUrl = `https://projectpokemon.org/images/normal-sprite/${id}.gif`;

  return (
    <Container sx={{ background: 'transparent' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          mb: 3,
        }}
      >
        <img height={60} src={pokemonLable} alt="pokemon" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          marginTop: '30px',
        }}
      >
        <NavLink to="/">
          <Button variant="contained">Back</Button>
        </NavLink>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          flexDirection: { sm: 'row', xs: 'column' },
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Section
          elevation={4}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '30px',
              background:
                typesListColors?.length > 1
                  ? `linear-gradient(to right, ${gradientColors})`
                  : typesListColors[0] || '',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <img alt="pokemon" height={180} src={imageUrl} />
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <Typography textTransform="capitalize" variant="h4">
              {pokemonData?.name}
            </Typography>
          </Box>
          <Divider sx={{ width: '100%' }} />
          <Box p={5} width="100%">
            <Grid container>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                item
                xs={12}
                md={3}
                sm={12}
                xl={3}
              >
                <Typography>Types</Typography>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
                item
                xs={12}
                md={9}
                sm={12}
                xl={9}
              >
                {pokemonData?.types?.map((el) => {
                  return (
                    <TypeButton key={el.type.name} typeName={el.type.name} />
                  );
                })}
              </Grid>
            </Grid>
            {pokemonData?.stats?.map((stat) => {
              return (
                <Grid container key={stat.stat.name}>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    item
                    xs={12}
                    md={3}
                    sm={12}
                    xl={3}
                  >
                    <Typography textTransform="capitalize">
                      {stat.stat.name}
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    item
                    xs={12}
                    md={9}
                    sm={12}
                    xl={9}
                  >
                    <BorderLinearProgress
                      variant="determinate"
                      value={stat.base_stat > 100 ? 100 : stat.base_stat}
                      style={{ width: '100%' }}
                    />
                    <Typography ml={2} variant="body2" color="textSecondary">
                      {stat.base_stat}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
          <Divider sx={{ width: '100%' }} />
          <Box px={5} py={2} width="100%">
            <Box>
              <Typography>Moves:</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                <Typography textAlign="left">
                  {pokemonData?.moves.map((move) => {
                    return move?.move?.name + ', ';
                  })}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Section>
      </Box>
    </Container>
  );
});
