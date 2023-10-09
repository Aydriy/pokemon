import * as React from 'react';
import { Button } from '@mui/material';
import { FC } from 'react';
import { colorsType } from '../../constants/colors';

type TypeButtonProps = {
  typeName?: string;
};

export const TypeButton: FC<TypeButtonProps> = ({ typeName = '' }) => {
  return (
    <Button
      disableRipple
      disableElevation
      size="small"
      sx={{
        backgroundColor: `#${colorsType[typeName]}`,
        '&:hover': {
          backgroundColor: `#${colorsType[typeName]}`,
        },
        textTransform: 'capitalize',
        borderRadius: '50px',
      }}
      variant="contained"
    >
      {typeName}
    </Button>
  );
};
