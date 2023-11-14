import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { routes } from './routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
  </QueryClientProvider>,
)

// document.addEventListener('DOMContentLoaded', () => {
//   createRoot(document.getElementById('app') as HTMLElement).render(
//     <QueryClientProvider client={queryClient}>
//       <App />
//       <ReactQueryDevtools />
//     </QueryClientProvider>
//   )
// })
