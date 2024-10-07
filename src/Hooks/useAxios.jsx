import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

export const AxiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxios = () => {
    const{logout} = useAuth()

    const navigate = useNavigate();

    

    AxiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');

        config.headers.authorization = `Bearer ${token}`
        
        return config
    } , function (error) {
        // Do something with request error
        return Promise.reject(error);
})

        //interceptors 401 and 403 status
        
        AxiosSecure.interceptors.response.use(function(response){
            return response
        } , (error)=>{

            const status =  error.response.status;

            if(status == 401 || status === 403){

                //if 401 and 403 happen then logut the user

                logout()
                .then(res=>{
                    toast.error('Someting bad happen')
                })

                navigate('/login')

            }

            return Promise.reject(error);


        })




    
   return AxiosSecure;
};

export default useAxios;