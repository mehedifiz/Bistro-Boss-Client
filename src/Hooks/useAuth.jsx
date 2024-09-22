import { useContext } from "react";
import { Authcontext } from "../firebase/Providers/Authprovider";

const useAuth = () => {
    
    const auth = useContext(Authcontext);
    return auth ;
};

export default useAuth;