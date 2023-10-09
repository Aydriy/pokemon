import { FC } from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

const RootBox = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

interface FooterProps {
  content?: {
    brand: {
      image?: string;
      width: number;
      text?: string;
    };
    copy: string;
  };
}

export const Footer: FC<FooterProps> = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'error.main' }}>
      <Box sx={{ maxWidth: '100%', padding: { xs: '0 16px', md: '0 40px' } }}>
        <RootBox
          py={2}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        ></RootBox>
      </Box>
    </AppBar>
  );
};
