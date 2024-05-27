import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import DashboardLayout from '../layouts/DashboardLayout'
import { element } from 'prop-types'
import Statistics from '../pages/Dashboard/Common/Statistics/Statistics'
import AddRoom from '../pages/Dashboard/Guest/AddRoom/AddRoom'
import MyListing from '../pages/Dashboard/Guest/MyListing/MyListing'
import Profile from '../pages/Dashboard/Common/Profile/Profile'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <RoomDetails />,


      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children:[
      {
        index:true,
        element:<Statistics></Statistics>
      },

      {
        path: 'add-room',
        element: <AddRoom></AddRoom>,
      },

      {
        path: 'my-listings',
        element: <MyListing></MyListing>,
      },
      {
        path: 'manage-users',
        element: <ManageUsers />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },

    ]
    
  },



  
])
