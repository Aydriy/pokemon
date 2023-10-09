import React from 'react';
import { theme } from 'assets/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './App.scss';
import { SnackbarProvider } from 'notistack';
import { NotificationsCloseBtnComponent } from '../shared';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={Number(process.env.REACT_APP_MAX_NOTI) || 3}
          action={(snackbarKey) => (
            <NotificationsCloseBtnComponent snackbarKey={snackbarKey} />
          )}
        >
          <RouterProvider router={routes} />
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
