import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from 'layouts';
import { HomePage, PokemonPage } from 'pages';

export const routes = createBrowserRouter([
  {
    path: '',
    element: <AppLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'pokemon/:id', element: <PokemonPage /> },
    ],
  },
  { path: '*', element: <h1>Not found page</h1> },
]);
