
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, Router } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About';
import ReactDOM from "react-dom/client";
import React from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,

      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
