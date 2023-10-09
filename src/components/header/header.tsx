import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import Logo from 'assets/logo.svg';
import pokemonLable from '../../assets/img/pokemonLableBlue.png';

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  white-space: nowrap;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'error.main' }}>
      <Box sx={{ maxWidth: '100%', padding: { xs: '0 16px', md: '0 40px' } }}>
        <Toolbar disableGutters>
          <NavLink
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} height="40" alt="pokemon" />
          </NavLink>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <img height={60} src={pokemonLable} alt="pokemon" />
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
