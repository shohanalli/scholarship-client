import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AllSchollership from "../Page/AllSchollership/AllSchollership";

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
        element : <AllSchollership />,
        },
    ]
  },
]);
