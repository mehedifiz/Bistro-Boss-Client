import { useContext } from "react";
import { Authcontext } from "../firebase/Providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Comonents/Loading";

const PrivateRoute = ({chidren}) => {
    const {user ,loading} = useContext(Authcontext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return chidren;
    }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;