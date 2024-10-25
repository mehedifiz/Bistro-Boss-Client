import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { FaDollarSign } from "react-icons/fa";
import Loading from "../../../Comonents/Loading";

const Adminhome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios()

    const {data : stat , isLoading} = useQuery({
        queryKey:['admin-stats'],

        queryFn: async()=>{
            const res =await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    if (isLoading) {
        return <Loading />;      }
    
    return (
        <div>

             <h2 className="text-3xl">Hi , Welcome {user?.displayName ? user.displayName : 'Back'} </h2> 



             <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
    {/* <FaDollarSign className="text-4xl"/> */}
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">${stat.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    </div>
    <div className="stat-title"> Users</div>
    <div className="stat-value">{stat.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
      </svg>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{stat.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
      </svg>
    </div>
    <div className="stat-title">Menu Items</div>
    <div className="stat-value">{stat.menuItems}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
        </div>
    );
};

export default Adminhome;