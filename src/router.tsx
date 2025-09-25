import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';
import { App } from '@/app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
