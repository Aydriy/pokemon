import { Box, TableCell, Typography } from '@mui/material';
import React from 'react';
import { Loader } from '../loading/loader';

type NoItemsWrapperProps = {
  length: number;
  text?: string;
  children?: React.ReactNode;
  isTableComponent?: boolean;
  colSpan?: number;
  isLoading?: boolean;
  loaderSize?: number;
  loaderPad?: number;
};

export const NoItemsWrapper: React.FC<NoItemsWrapperProps> = ({
  length,
  text = 'There are no items',
  children,
  isTableComponent = false,
  colSpan = 1,
  isLoading = false,
  loaderSize = 20,
  loaderPad,
}) => {
  return length > 0 && !isLoading ? (
    <>{children}</>
  ) : (
    <Box
      component={isTableComponent ? TableCell : 'div'}
      sx={{ py: 5 }}
      width={'100%'}
      colSpan={colSpan}
    >
      {isLoading ? (
        <Loader size={loaderSize} pad={loaderPad} />
      ) : (
        <Typography gutterBottom align="center" variant="subtitle1">
          {text}
        </Typography>
      )}
    </Box>
  );
};
