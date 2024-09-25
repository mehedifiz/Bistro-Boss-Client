import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Screet from "../screet";
import Deshboard from "../Layout/Deshboard";
import Cart from "../Pages/Deshboard/Cart/Cart";
import Signup from "../Pages/Signup/Signup";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path: '/menu',
          element: <Menu></Menu>
        },{
          path:'/order',
          element: <Order></Order>
        }
        ,{
          path:'/order/:category',
          element: <Order></Order>
        },{
          path:'/login',
          element: <Login></Login>
        }
        ,{
          path:'/signup',
          element:<Signup></Signup>
        }
        ,{
          path:'/secret',
          element:<PrivateRoute><Screet></Screet></PrivateRoute>
        }


      ]
    },

    {
      path:'/deshboard',
      element:<PrivateRoute><Deshboard></Deshboard></PrivateRoute>,
      children:  [
        {
          path: 'cart',
          element:<Cart></Cart>
        },
      ]
    }
  ]);
  