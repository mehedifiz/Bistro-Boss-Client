import { createContext, useState } from "react";
import app from "../firebase.config";

export const Authcontext = createContext(null)

const auth = getAuth(app)





    

const Authprovider = ({children}) => {
    const [user ,setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    const authinfo ={
        user,
        loading,
        

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;