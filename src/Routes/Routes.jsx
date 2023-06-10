import {
    createBrowserRouter
  } from "react-router-dom";
import AllUsers from "../components/AllUsers/AllUsers";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'allinstructors',
            element: <PrivateRoute><AllInstructors></AllInstructors></PrivateRoute>
        },
        {
            path: 'allclasses',
            element: <PrivateRoute><AllClasses></AllClasses></PrivateRoute>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        }
      ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children: [
            {
                path: "allusers",
                element: <AllUsers></AllUsers>
            }
        ]
    }
  ]);