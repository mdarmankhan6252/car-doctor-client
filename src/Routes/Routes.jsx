
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import ServiceDetails from "../Components/Home/ServiceDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/serviceDetails/:id',
          element:<ServiceDetails/>
        }
      ]
    },
  ]);

export default router;