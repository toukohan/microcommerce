import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Root, { rootLoader } from './routes/Root'
import Home from './routes/Home'
import About from './routes/About'
import Dashboard from './routes/Dashboard'
import SignIn from './routes/SignIn'
import NotFound from './routes/NotFound'

import './index.css'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      { 
        path: '/', 
        element: <Home /> 
      },
      { 
        path: '/about', 
        element: <About /> 
      },
      { 
        path: '/dashboard', 
        element: <Dashboard /> 
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ],
  },
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
