import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import UpdateProfile from './pages/UpdateProfile'
import Login from './pages/Login'
import Register from './pages/Register'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import EstateDetails from './components/EstateDetails'
import AuthContextComponent from './Context/AuthContextComponent'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute/PrivateRoute'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
      path: "/",
      element: <Home></Home>
     },
     {
      path: "/updateProfile",
      element: <UpdateProfile></UpdateProfile>
     },
     {
      path: '/login',
      element: <Login></Login>
     },
     {
      path: '/register',
      element: <Register></Register>
     },
     {
      path: '/estateDetails/:id',
      element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
      loader: () => fetch('/data.json')

     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextComponent>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </AuthContextComponent>
  </React.StrictMode>,
)
