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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManageRegisteredCamps from "../Pages/Dashboard/ManageRegisteredCamps/ManageRegisteredCamps";
import ParticipantProfile from "../Pages/Dashboard/ParticipantProfile/ParticipantProfile";
import RegsiteredCamps from "../Pages/Dashboard/RegsiteredCamps/RegsiteredCamps";
import FeedBack from "../Pages/Dashboard/FeedBack/FeedBack";
import OrganizerProfile from "../Pages/Dashboard/OrganizerProfile/OrganizerProfile";
import AddUpComingCamps from "../Pages/Dashboard/AddUpComingCamps/AddUpComingCamps";
import UpComingCampDetails from "../Pages/Home/UpComingCamps/UpComingCampDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
        {
            path:'upComing-camps-details/:id',
            element:<PrivateRoute><UpComingCampDetails></UpComingCampDetails></PrivateRoute>

        },
      ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            //participant routes
            {
                path:'participant-profile',
                element:<ParticipantProfile></ParticipantProfile>

            },
            {
                path:'registered-camps',
                element:<RegsiteredCamps></RegsiteredCamps>

            },
            {
                path:'feedback-and-ratings',
                element:<FeedBack></FeedBack>

            },
           

            // Organizer only route 
            {
                path:'organizer-profile',
                element:<OrganizerRoute><OrganizerProfile></OrganizerProfile></OrganizerRoute>
            },
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
            {
                path:'manage-registered-camps',
                element:<OrganizerRoute><ManageRegisteredCamps></ManageRegisteredCamps></OrganizerRoute>
            },
            {
                path:'add-upcoming-camp',
                element:<OrganizerRoute><AddUpComingCamps></AddUpComingCamps></OrganizerRoute>
            },
        ]
    }
  ]);