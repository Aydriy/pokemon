import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonTypesResObjInterface } from '../../types/pokemon.types.interface';
import { useGetPokemonQuery } from '../../services';
import Box from '@mui/material/Box';
import { colorsType } from '../../constants/colors';
import { TypeButton } from '../buttons_collection/type.button';

const StyledCard = styled(Card)(() => ({
  transition: 'all 0.2s ease-out',
  boxShadow: '0 14px 26px rgba(0,0,0,0.04)',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.005) translateZ(0)',
    boxShadow: '0 24px 36px rgba(0,0,0,0.11)',
  },
}));

type PokemonCardProps = {
  pokemon?: PokemonTypesResObjInterface;
};

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const pokemonName = pokemon?.name || pokemon?.pokemon?.name;

  const handleNavigateToPokemon = () => {
    navigate(`/pokemon/${pokemonName}`);
  };

  const { data: pokemonData } = useGetPokemonQuery(
    {
      search: pokemonName || '',
    },
    { skip: !pokemonName }
  );

  const typesListColors =
    pokemonData?.types?.map((el) => `#${colorsType[el.type.name]}`) || [];

  const gradientColors = typesListColors?.join(', ');

  return (
    <StyledCard
      sx={{
        maxWidth: 280,
        width: 280,
      }}
      elevation={3}
      onClick={handleNavigateToPokemon}
    >
      <Box
        sx={{
          height: '20px',
          background:
            typesListColors?.length > 1
              ? `linear-gradient(to right, ${gradientColors})`
              : typesListColors[0] || '',
        }}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          sx={{ objectFit: 'contain' }}
          image={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: 'capitalize' }}
          >
            {pokemonName}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {pokemonData?.types?.map((el) => {
              return <TypeButton key={el.type.name} typeName={el.type.name} />;
            })}
          </Box>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};
