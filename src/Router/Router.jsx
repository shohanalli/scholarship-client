import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivetRouter from "./PrivetRouter/PrivetRouter";
import AllScholarship from "../Page/AllSchollership/AllScholarship";
import ScholarshipDetails from "../Page/ScholarshipDetails/ScholarshipDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import Payment from "../Page/Payment/Payment";
import PaymentCancel from "../Page/PaymentCancel/PaymentCancel";
import PaymentSuccess from "../Page/Home/PaymentSuccess/PaymentSuccess";

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
        element: <AllScholarship />
        },
        {
        path: '/scholarship-details/:id',
        element: <PrivetRouter><ScholarshipDetails /></PrivetRouter>
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
  },
  {
    path: 'dashboard',
    element: <PrivetRouter><DashboardLayout /></PrivetRouter>,
    children:[
      {
        path : 'payment/:scholarId',
        element: <Payment />
      },
            {
        path: 'payment-cancel',
        element:<PaymentCancel />
      },
      {
        path: 'payment-success',
        element: <PaymentSuccess />
      }
    ]
  }




]);
