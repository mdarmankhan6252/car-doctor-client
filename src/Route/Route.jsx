import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home.jsx/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UserProfile from "../components/UserProfile";
import CheckOut from "../components/CheckOut";
import MyCheckouts from "../components/MyCheckouts";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Root/>,
     errorElement:<ErrorPage/>,
     children:[
      {
         index:true,
         element:<Home/>
      },
      {
         path:'/about',
         element:<About/>
      },
      {
         path:'/services',
         element:<Services/>
      },
      {
         path:'/blog',
         element:<Blog/>
      },
      {
         path:'/contact',
         element:<Contact/>
      },
      {
         path:'/login',
         element:<Login/>
      },
      {
         path:'/register',
         element:<Register/>
      },
      {
         path:'/userProfile',
         element:<UserProfile/>
      },
      {
         path:"/checkout/:id",
         element:<PrivateRoute><CheckOut/></PrivateRoute>,
         loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
         path:'/myCheckout',
         element:<PrivateRoute><MyCheckouts/></PrivateRoute>
      }
     ]
   },
 ]);

export default router