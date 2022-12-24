import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Room from '../Pages/Room';
import Error from "../Pages/Error";

const router =  createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/room",
        element: <Room />

    },
    {
        path: "*",
        element: <Error />
    }
])

export {router}