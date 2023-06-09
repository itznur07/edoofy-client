import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
import Home from "../Pages/Home/Home";
import InstructorsPage from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
