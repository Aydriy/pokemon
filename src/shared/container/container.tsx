import { Paper, styled } from '@mui/material';

export const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  marginTop: theme.spacing(1),
}));
