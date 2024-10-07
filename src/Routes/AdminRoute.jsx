import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Comonents/Loading";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
        const {user , loading} = useAuth();
        const location =useLocation();
        const [isAdmin , isAdminLoading] = useAdmin();


        if(loading || isAdminLoading) {
            return <Loading/>
        }

        if(user && isAdmin){
            return children;
        }

        return <Navigate to='/' state={{from : location }}></Navigate>

};

export default AdminRoute;