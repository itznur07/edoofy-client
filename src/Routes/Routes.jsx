import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import ManageClasses from "../Pages/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Admin/ManageUsers/ManageUsers";
import Classes from "../Pages/Classes/Classes";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClass/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import SelectedClasses from "../Pages/Dashboard/SeletedClass/SelectedClasses";
import Home from "../Pages/Home/Home";
import AddClassForm from "../Pages/InstructorDashboard/AddClass/AddClass";
import MyClasses from "../Pages/InstructorDashboard/MyClasses/MyClasses";
import InstructorsPage from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <Classes></Classes>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/selectedclasses",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "/dashboard/enrolledclsses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "/dashboard/paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/instructor/addclass",
        element: <AddClassForm></AddClassForm>,
      },
      {
        path: "/dashboard/instructor/myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "/dashboard/admin/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/admin/manageclasses",
        element: <ManageClasses></ManageClasses>,
      },
    ],
  },
]);

export default router;
