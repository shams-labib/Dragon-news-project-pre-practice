import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Root from "./Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Card from "../components/Twosidehandler/Card";
import Register from "../Firebase/Register/Login/Register";
import Login from "../Firebase/Register/Login/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<Root></Root>,
        children: [
            {
                path:'/',
                index: true,
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
              path:'/register',
              element:<Register></Register>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
                path:'/career',
                element:<Career></Career>
            },
            {
                path:'/category/:id',
                element:<Card></Card>,
                loader:()=> fetch('/news.json')
            }
        ]
    }
])