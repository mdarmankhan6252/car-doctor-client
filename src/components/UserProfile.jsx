import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserProfile = () => {
   const { user } = useContext(AuthContext)
   return (
      <div className=" min-h-[calc(100vh-446px)] flex items-center justify-center">
         <div className="mx-auto border p-12 rounded-md">
               <div className="flex items-center justify-end pb-6">
                  <img src={user?.photoURL} alt="" className="w-24 rounded-md" />
               </div>

            <div className="user-info text-gray-800">
               <div className="flex mb-2">
                  <span className="font-bold w-40 pr-4">Name</span>
                  <span>: {user?.displayName || "N/A"}</span>
               </div>
               <div className="flex mb-2">
                  <span className="font-bold w-40 pr-4">Email</span>
                  <span>: {user?.email || "N/A"}</span>
               </div>
               <div className="flex mb-2">
                  <span className="font-bold w-40 pr-4">Created At</span>
                  <span>{user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleString() : "N/A"}</span>
               </div>
               <div className="flex mb-2">
                  <span className="font-bold w-40 pr-4">Last Login Time</span>
                  <span>{user?.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString() : "N/A"}</span>
               </div>
            </div>

         </div>
      </div>
   );
};

export default UserProfile;