import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation();
   if (user?.email) {
      return children;
   }
   if (loading) {
      return <div className="min-h-[calc(100vh-446px)] w-full flex items-center justify-center">
         <RingLoader color="#ff1212" />
      </div>
   }
   return <Navigate to="/login" state={location.pathname} replace />
};

export default PrivateRoute;