import { CgAdd, CgMenu } from "react-icons/cg";
import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUpload, FaUsers, FaUtensils } from "react-icons/fa";
import { FaFirstOrder } from "react-icons/fa6";
import { MdEmail, MdFoodBank, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { BiBook } from "react-icons/bi";
import useAdmin from "../Hooks/useAdmin";

const Deshboard = () => {
    const [cart] = useCart();

    // todo : get isAdmin value from the database ;
    const [isAdmin] = useAdmin() ;
    // const isAdmin = true ;

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500 "  >
                <ul className="menu p-4">
                {    
                  isAdmin ? <>

<li>
                        <NavLink to='/deshboard/adminHome'> <FaHome></FaHome> Admin Home</NavLink>
                    </li>

                <li>
                    <NavLink to='/deshboard/addItems'>  <CgAdd />Add Item</NavLink>
                    </li>
                <li>
                    <NavLink to='/deshboard/manageItems'>  <FaList/> manage items</NavLink>
                    </li>
                <li>
                    <NavLink to='/deshboard/manageBookings'>  <BiBook/> Manage bookings</NavLink>
                    </li>
                <li>
                    <NavLink to='/deshboard/users'>  <FaUsers/> All user</NavLink>
                    </li>

                    

                  
                  </>:
                  
                  <>
                  <li>
                        <NavLink to='/deshboard/userHome'> <FaHome></FaHome> User Home</NavLink>
                    </li>

                <li>
                    <NavLink to='/deshboard/cart'>  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
                    </li>
                <li>
                    <NavLink to='/deshboard/Reservation'>  <FaCalendar/> Reservation</NavLink>
                    </li>
                <li>
                    <NavLink to='/deshboard/review'>  <FaList/> Add a review</NavLink>
                    </li>
                <li>
                    <NavLink to='/deshboard/bookings'>  <FaCalendar/> My Bookings</NavLink>
                 </li>
                 </>
                }

                    <div className="divider"></div>
                        {/* shared navlinks beetween admion and user */}

                    <li>
                     <NavLink to='/'> <FaHome/>Home</NavLink>
                    <NavLink to='/menu'> <MdFoodBank/>Menu</NavLink>
                   <NavLink to='/order/salad'> <FaFirstOrder/>Order</NavLink>
                   <NavLink to='/contract'> <MdEmail/>Contract</NavLink>
                    </li>

                

                </ul>

            </div>

            

            <div className="flex-1 p-8">

                <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Deshboard;