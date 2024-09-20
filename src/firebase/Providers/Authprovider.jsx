import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const Authcontext = createContext(null)

const auth = getAuth(app)





    

const Authprovider = ({children}) => {
    const [user ,setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email , password )=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);

    }

    const login = (email , password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(email , password);
    }
    const logout =()=>{
        return signOut(auth)
    }



    useEffect(()=>{
       const unsubcribe = onAuthStateChanged(auth , currentuser =>{
            setUser(currentuser);
            console.log('curr user' , currentuser);
            setLoading(false);
        });

        return () =>{
            return unsubcribe();
              }
        },[]);


    const authinfo ={
        user,
        loading,
        createUser,
        logout,
        login,
        
        

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;