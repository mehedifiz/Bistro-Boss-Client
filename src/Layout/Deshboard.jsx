import { CgMenu } from "react-icons/cg";
import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaFirstOrder } from "react-icons/fa6";
import { MdFoodBank, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Deshboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500 "  >
                <ul className="menu p-4">
                  
                    <li>
                        <NavLink to='/deshboard/userHome'> <FaHome></FaHome> User Home</NavLink>
                    </li>

                <li>
                    <NavLink to='/deshboard/cart'>  <FaShoppingCart></FaShoppingCart> My Cart</NavLink>
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

                    <div className="divider"></div>


                    <li>
                        <NavLink to='/'> <FaHome/>Home</NavLink>
                        <NavLink to='/menu'> <MdFoodBank/>Menu</NavLink>
                        <NavLink to='/order/salad'> <FaFirstOrder/>Order</NavLink>
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