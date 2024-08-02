import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../Auth/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        createUser,
        loginUser,
        user

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;