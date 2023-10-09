import React, { useState, FC } from 'react';
import {
  IconButton,
  Menu,
  List,
  ListItem,
  Divider,
  MenuItem,
  Grid,
  Button,
} from '@mui/material';
import { Box } from '@mui/material';
import { useServerError } from 'hooks';
import { useGetPokemonTypesQuery } from '../../services';
import FilterListIcon from '@mui/icons-material/FilterList';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { colorsType } from '../../constants/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import { NoItemsWrapper } from '../../shared';
export const TypeMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const location = useLocation();

  const filterType: string = location.state?.type || '';

  const {
    data: typesData,
    error: typesError,
    isError: typesIsError,
    isFetching,
  } = useGetPokemonTypesQuery({});

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useServerError({
    isError: typesIsError,
    error: typesError,
  });

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleReset = () => {
    navigate(`/`);
    setAnchorEl(null);
  };

  const handleClickType = (type: string) => {
    navigate('/', {
      state: {
        type: type,
      },
    });
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        aria-controls="user-account-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          color: 'background.default',
          backgroundColor: 'rgba(224,0,0,0.34)',
        }}
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        id="user-account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box sx={{ display: 'flex', mx: 1 }}>
          <ListItemText>Filter by class</ListItemText>
        </Box>
        <Divider />
        <List sx={{ padding: 0, width: '100%' }} dense>
          <NoItemsWrapper
            length={typesData?.results?.length as number}
            isLoading={!typesData?.results?.length && isFetching}
            text="There are no types"
          >
            {typesData?.results?.map((value) => {
              const backgroundColor = colorsType[value.name] || '#000000';
              return (
                <ListItem
                  onClick={() => handleClickType(value.name)}
                  sx={{
                    padding: 0,
                    mb: 1,
                    color: `#${backgroundColor}`,
                  }}
                  key={value.name}
                >
                  <ListItemButton selected={filterType === value.name}>
                    <ListItemText sx={{ textTransform: 'capitalize' }}>
                      {value.name}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </NoItemsWrapper>
        </List>
        <MenuItem
          disableRipple
          disableTouchRipple
          sx={{ cursor: 'default', '&:hover': { background: 'none' } }}
        >
          <Grid container spacing={1} justifyContent="space-between">
            <Grid item flexBasis={1}>
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </MenuItem>
      </Menu>
    </Box>
  );
};
