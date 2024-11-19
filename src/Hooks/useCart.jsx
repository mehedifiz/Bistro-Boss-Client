import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
    const AxiosSecure = useAxios();
    const { user } = useAuth();

    // Ensure that user.email is defined before making the request
    const { refetch, data: cart = [], isLoading, isError, error } = useQuery({
        queryKey: ['cart', user?.email], // Ensure user.email is valid
        queryFn: async () => {
            if (!user?.email) {
                throw new Error("User email is undefined");
            }
            const res = await AxiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        },
        enabled: !!user?.email, // Only run the query if user.email is available
    });

    // Handle error or loading states if needed
    if (isLoading) {
        console.log('Loading cart...');
    }
    if (isError) {
        console.error('Error fetching cart:', error);
    }

    return { cart, refetch, isLoading, isError, error };
};

export default useCart;
