import { Link } from "react-router-dom";

const Navber = () => {
    const navlinks = <>
     <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/order/salad'>Order Food</Link></li>
    <li><Link to='/login'>Login</Link></li>
    
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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