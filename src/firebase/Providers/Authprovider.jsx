import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const Authcontext = createContext(null);

const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()

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
        if(currentUser){
          //get token and store client

          const userInfo = {email: currentUser.email}
          axiosPublic.post('/jwt' , userInfo )
          .then(res =>{
            if(res.data.token){
              localStorage.setItem('access-token' , res.data.token)
            } 
          
          })


        } else{
          localStorage.removeItem('access-token')
        }
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
