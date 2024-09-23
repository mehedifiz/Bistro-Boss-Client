import { useQuery } from "@tanstack/react-query";
import useAxios, { AxiosSecure } from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
    const AxiosSecure =useAxios();
    const {user} = useAuth();

    //tan stack
    const  {  refetch ,data:cart=[]} = useQuery({
        queryKey:['cart' , user?.email],
        queryFn:async()=>{
            const res = await AxiosSecure.get(`/carts?email=${user.email}`)

            return res.data;

        }

    })

    return [cart , refetch ]


};

export default useCart;