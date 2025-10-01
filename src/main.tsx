import { Toaster } from '@/components/ui/toaster';
import '@/globals.css';
import { router } from '@/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import 'react-photo-view/dist/react-photo-view.css';
import { RouterProvider } from 'react-router-dom';
import { toastUtil } from './utils/toast-utils';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
      staleTime: 5000,
    },
    mutations: {
      gcTime: 0,
      onError: (error) => {
        toastUtil.error(error.message);
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <Toaster />
  </QueryClientProvider>,
);
