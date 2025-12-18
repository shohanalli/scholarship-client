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
import DashboardHome from "../Page/Dashboard/DashboardHome/DashboardHome";
import MyApplication from "../Page/MyApplication/MyApplication";
import MyReview from "../Page/MyReview/MyReview";
import StudentRouter from "./StudentRouter/StudentRouter";
import AdminRouter from "./AdminRouter/AdminRouter";
import AddScholarship from "../Page/AddScholarship/AddScholarship";
import ManageScholarships from "../Page/ManageScholarships/ManageScholarships";
import ManageUsers from "../Page/ManageUsers/ManageUsers";
import Analytics from "../Page/Analytics/Analytics";
import EditScholarship from "../Page/EditScholarship/EditScholarship";
import ModeratorRauter from "./ModeratorRouter.jsx/ModeratorRauter";
import ManageApplication from "../Page/ManageApplication/ManageApplicaton";
import AllReviews from "../Page/AllReviews/AllReviews";
import ErrorPage from "../Page/ErrorPage/ErrorPage";

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
        index: true,
        element: <DashboardHome />
      },
      // this page only using admin
      {
        path: 'add-scholarship',
        element: <AdminRouter> <AddScholarship /></AdminRouter>
      },
      {
        path: 'manage-scholarships',
        element: <AdminRouter> <ManageScholarships /></AdminRouter>
      },
      {
        path: 'manage-users',
        element: <AdminRouter> <ManageUsers /></AdminRouter>
      },
      {
        path: 'analytics',
        element: <AdminRouter> <Analytics /></AdminRouter>
      },
      {
        path: 'edit-scholarship/:id',
        element: <AdminRouter> <EditScholarship /></AdminRouter>
      },
      //this path only use moderator
      {
        path: 'manage-applications',
        element: <ModeratorRauter><ManageApplication /></ModeratorRauter>
      },
      {
        path: 'all-reviews',
        element: <ModeratorRauter><AllReviews /></ModeratorRauter>
      },

      // this page only using student
      {
        path:'my-application',
        element:<StudentRouter> <MyApplication /></StudentRouter>
      },
      {
        path:'my-review',
        element:<StudentRouter> <MyReview /> </StudentRouter>
      },
      {
        path : 'payment/:scholarId',
        element: <PrivetRouter><Payment /></PrivetRouter> 
      },
            {
        path: 'payment-cancel',
        element: <PrivetRouter><PaymentCancel /></PrivetRouter> 
      },
      {
        path: 'payment-success',
        element: <PrivetRouter><PaymentSuccess /></PrivetRouter>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  },



]);
