import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NavBar from './Componentes/Nav/NavBar';
import Home from './Componentes/Home/Home';
import Products from './Componentes/Products/Products';
import Dashborad from './Componentes/Dashboard/Dashborad';
import ProductDetails from './Componentes/ProductDetail/ProductDetails';
import Profile from './Componentes/Profile/Profile';
import Statistics from './Componentes/statistics/Statistics';
import Login from './Componentes/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar></NavBar>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/product",
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`)

      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: "dashboard",
        element: <Dashborad></Dashborad>,
        children: [
          {
            path:'',
            element: <Navigate to={"/dashboard/profile"}></Navigate>
          },
          {
            path: "profile",
            element: <Profile></Profile>
          },
          {
            path: "stc",
            element: <Statistics></Statistics>
          },
          {
            path: "login",
            element:<Login></Login>
          }
        ]

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
