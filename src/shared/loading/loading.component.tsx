// created by Artem
import { FC } from 'react';
import { CircularProgress, SxProps, Theme } from '@mui/material';
import { LoadingWrap } from './styles';

type LoadingComponentProps = {
  fullscreen?: boolean;
  byContainer?: boolean;
  size?: number;
  sx?: SxProps<Theme>;
};
export const LoadingComponent: FC<LoadingComponentProps> = ({
  fullscreen,
  byContainer,
  size = 200,
  sx,
}) => {
  return (
    <LoadingWrap sx={sx} fullscreen={fullscreen} byContainer={byContainer}>
      <CircularProgress size={size} />
    </LoadingWrap>
  );
};
