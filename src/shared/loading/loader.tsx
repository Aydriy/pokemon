import CircularProgress from '@mui/material/CircularProgress';
import { Box, styled } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

type LoaderPropType = {
  pad?: string | number;
  sx?: SxProps<Theme>;
  size?: number;
};

const StyledLoaderContainer = styled(Box)(({ pad }: LoaderPropType) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: pad,
}));

export const Loader = ({ pad, sx, size }: LoaderPropType) => (
  <StyledLoaderContainer padding={pad} sx={sx}>
    <CircularProgress size={size} />
  </StyledLoaderContainer>
);
