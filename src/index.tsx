import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyled } from './styles/GlobalStyled';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import ErrorPage from './pages/error-page';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Root from './routes/root';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { RequiredAuth } from './contexts/auth/RequiredAuth';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <RequiredAuth children={<Dashboard />} />,
      },
      
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyled />
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);