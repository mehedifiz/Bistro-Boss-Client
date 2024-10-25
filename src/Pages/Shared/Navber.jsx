import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../firebase/Providers/Authprovider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BsCart3 } from "react-icons/bs";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";


const Navber = () => {
  const {user ,logout} = useContext(Authcontext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart()
  const handleLogout = ()=>{
    logout()
  
    .then(() => {
      // Success message using toast
      toast.success("Logout successful!");
    })
    .catch((error) => {
      // Handle any errors
      toast.error(`Error logging out: ${error.message}`);
    });
  }
    const navlinks = <>
    <li><Link  className="btn btn-ghost" to='/'>Home</Link></li>
     <li><Link  className="btn btn-ghost" to='/menu'>Our Menu</Link></li>
    <li><Link  className="btn btn-ghost" to='/order/salad'>Order Food</Link></li>

      {
         user && isAdmin &&    <li><Link  className="btn btn-ghost" to='/deshboard/admin-home'>Deshboard </Link></li> 
      }
      {
         user && !isAdmin &&    <li><Link  className="btn btn-ghost" to='/deshboard/user-home'>Deshboard </Link></li> 
      }



     
    <li><Link  className="btn btn-ghost" to='/deshboard/cart'>
    <button className="btn">
    <BsCart3 />
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
    </Link></li>
   
    

    {
      user  ? <>
        {/* <span className="btn btn-ghost">{user?.displayName}</span> */}
          <Link onClick={handleLogout} className="btn btn-ghost">Logout</Link>
      
      </>  :
      
      <>
      <li><Link  className="btn btn-ghost" to='/signup'>signup</Link></li>
       <li><Link className="btn btn-ghost" to='/login'>Login</Link></li>
      </>
    }
    
    </>



    return (
        <>
        <div className="navbar bg-[#151515] bg-opacity-50 fixed z-10 text-white max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-black shadow">
       {navlinks}
      </ul>
    </div>
    <div className="flex flex-col">
    <a className="  text-xl font-Cinzel uppercase tracking-widest text-white font-extrabold">Bistro Boss</a>
    <a className="md:text-xl text-sm font-Cinzel uppercase tracking-[.400rem] text-gray-200 italic">Restaurant</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </>
    );
};

export default Navber;