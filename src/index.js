import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from "./error-page";
import Projects from "./pages/projects";
import Home from "./pages/home"
import W2 from "./pages/w2-2023"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "projects/",
        element: <Projects />,
      },
      {
        path: "home/",
        element: <Home />,
      },
      {
        path: "2023/",
        element: <W2/>,
      },
      {
        path: "/",
        element: <Home/>
      }
    ],
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);