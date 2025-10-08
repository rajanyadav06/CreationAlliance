
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, Router } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About';
import ReactDOM from "react-dom/client";
import React from "react";
import Contact from './Components/Contact-Us/Contact.jsx';
import DigitalService from './Components/Digital-Service/DigitalService.jsx';
import Gst from './Components/GST/Gst.jsx';
import Registration from './Components/Registrations/Regirstion.jsx';
import Trademark from './Components/Trademark/Trademark.jsx';
import Startup from './Components/Startup/Startup.jsx';


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
        path:"strartup",
        element:<Startup/>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path:"digital-service",
        element:<DigitalService/>,
      },
      {
        path:"gst",
        element:<Gst/>,
      },
      {
        path:"registration",
        element:<Registration/>,
      },
      {
        path:"trademark",
        element:<Trademark/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
