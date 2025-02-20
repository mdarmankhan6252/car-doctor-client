import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext } from "react";
import app from "../../firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   const auth = getAuth(app)
   const googleProvider = new GoogleAuthProvider()


   const createUser = (email, password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const loginUser = (email, password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const googleSignIn = () =>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider )
   }
   const updateUserProfile = (name) =>{
      return updateProfile(auth.currentUser, {
         displayName:name
      })
   }
   const logOut = () =>{
      setLoading(true)
      axios.post('http://localhost:5000/logout', user, {
         withCredentials:true
      })
      .then(res => console.log(res.data))
      return signOut(auth)
      
   }
   useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         console.log('currentUser-->',currentUser);         
         setUser(currentUser)
         setLoading(false)

         //if user exists then issue a token
         // if(currentUser){
         //    const loggedInUser = {email : currentUser.email}
         //    axios.post('http://localhost:5000/jwt',loggedInUser , {withCredentials:true})
         //    .then(res =>{
         //       console.log('token response', res.data);
         //    })
         // }
         
      })
      return(() =>{
         return unsubscribe()
      })
   },[])



   const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      loginUser,
      googleSignIn,
      logOut,
      updateUserProfile
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}         
      </AuthContext.Provider>
   );
};

export default AuthProvider;