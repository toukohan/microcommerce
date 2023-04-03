import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root, { rootLoader } from './routes/Root'
import Home from './routes/Home'
import About from './routes/About'
import Dashboard from './routes/Dashboard'

import './index.css'

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
        element: <Dashboard /> },
    ],
  },
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
