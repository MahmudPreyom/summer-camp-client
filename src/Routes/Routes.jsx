import {createBrowserRouter} from "react-router-dom";
import AllUsers from "../components/AllUsers/AllUsers";
import ManageClasses from "../components/ManageClasses/ManageClasses";
import MyClass from "../components/MyClass/MyClass";
import SelectedClass from "../components/SelectedClass/SelectedClass";
import UpdateClasses from "../components/UpdateClass/UpdateClasses";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Error from "../pages/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
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
            element: <AllInstructors></AllInstructors>
        },
        {
            path: 'allclasses',
            element: <AllClasses></AllClasses>
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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "addclass",
                element: <UpdateClasses></UpdateClasses>
            },
            {
                path: "manageclass",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: "myclass",
                element: <MyClass></MyClass>
            },
            {
                path: "selectedclass",
                element: <SelectedClass></SelectedClass>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
  ]);