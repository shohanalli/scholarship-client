import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AllSchollership from "../Page/AllSchollership/AllSchollership";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivetRouter from "./PrivetRouter/PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
        index: true,
        element : <Home />,
        },
        {
        path: '/all-scholarship',
        element : <PrivetRouter><AllSchollership /></PrivetRouter>,
        },
        
    ]
  },
  {
    path:'/',
    element: <AuthLayout />,
    children:[
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }




]);
