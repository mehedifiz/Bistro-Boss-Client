import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const Authcontext = createContext(null);

const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    // Fix: pass the auth object as the first argument
    return signInWithEmailAndPassword(auth, email, password);
  };

    const GoogleAuth= new GoogleAuthProvider;

    const googleLogin = ()=>{
    setLoading(true)

      return signInWithPopup(auth , GoogleAuth)
    }




  const logout = () => {
    setLoading(true)
    return signOut(auth);
  };

  const updateUserProfile =(name ,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName: name , photoURL : photo
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user:", currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logout,
    login,
    updateUserProfile,
    googleLogin
  };

  return <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>;
};

export default Authprovider;
