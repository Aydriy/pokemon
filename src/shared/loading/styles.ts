import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

interface Props {
  fullscreen?: boolean;
  byContainer?: boolean;
}
export const LoadingWrap = styled(Box)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${({ fullscreen }) =>
    fullscreen &&
    `
    z-index: 99;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}
  ${({ byContainer }) =>
    byContainer &&
    `
    position: absolute;
    background: rgba(255,255,255, .8);
    z-index: 99;
  `}
`;
