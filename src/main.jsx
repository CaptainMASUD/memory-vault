import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import "./index.css"
import Login from './Components/LogIn/Login';
import Friends from './Components/Friends/Friends';
import Profile from './Components/UserProfile/Profile';



const router = createBrowserRouter([
  {
    path :'/',
    element: <Layout/>,
    children : [
      {
        path:'',
        element : <Home/>
      },
      {
        path:'login',
        element : <Login/>
      },
      {
        path:'friends',
        element : <Friends/>
      },
      {
        path:'profile',
        element : <Profile/>
      },

      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
