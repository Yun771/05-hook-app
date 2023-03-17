import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { HomePage, AboutPage, LoginPage, MainApp } from './'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <Navigate to='/' replace />
      }
    ]
  },

]);