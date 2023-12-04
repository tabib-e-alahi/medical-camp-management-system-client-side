import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import PrivateRoute from "./PrivateRoute";
import CampDetails from "../Pages/CampDetails/CampDetails";
import AddCamp from "../Pages/Dashboard/AddCamp/AddCamp";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import OrganizerRoute from "./OrganizerRoute";
import ManageCamps from "../Pages/Dashboard/ManageCamps/ManageCamps";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'available-camps',
            element:<PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>
        },
        {
            path:'/camp-details/:id',
            element:<PrivateRoute><CampDetails></CampDetails></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[

            // Organizer only route 
            {
                path:'add-a-camp',
                element:<OrganizerRoute><AddCamp></AddCamp></OrganizerRoute>
            },
            {
                path:'all-users',
                element:<OrganizerRoute><AllUsers></AllUsers></OrganizerRoute>
            },
            {
                path:'manage-camps',
                element:<OrganizerRoute><ManageCamps></ManageCamps></OrganizerRoute>
            },
        ]
    }
  ]);