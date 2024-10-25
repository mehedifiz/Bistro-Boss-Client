import { CgAdd, CgMenu } from "react-icons/cg";
import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUpload, FaUsers, FaUtensils } from "react-icons/fa";
import { FaFirstOrder } from "react-icons/fa6";
import { MdEmail, MdFoodBank } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { BiBook } from "react-icons/bi";
import useAdmin from "../Hooks/useAdmin";
import { useState } from "react"; // Import useState for managing drawer state
import { LiaHistorySolid } from "react-icons/lia";
import { RiHistoryLine } from "react-icons/ri";

const Deshboard = () => {
    const [cart] = useCart();

    // todo : get isAdmin value from the database ;
    const [isAdmin] = useAdmin();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen); // Toggle drawer visibility
    };

    return (
        <div className="flex">
            {/* Drawer Toggle Icon */}
            <button 
                onClick={toggleDrawer} 
                className="p-4 text-2xl fixed top-4 left-4 z-50 text-white bg-orange-500 rounded-full">
                <CgMenu />
            </button>

            {/* Sidebar Drawer */}
            <div className={`w-64 min-h-screen bg-orange-500 fixed top-0 left-0 z-40 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <ul className="menu p-4">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to='/deshboard/admin-home'>
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/addItems'>
                                    <CgAdd /> Add Item
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/manageitems'>
                                    <FaList /> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/manageBookings'>
                                    <BiBook /> Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/users'>
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to='/deshboard/user-home'>
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/cart'>
                                    <FaShoppingCart /> My Cart ({cart.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/payment-history'>
                                    <RiHistoryLine /> Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/review'>
                                    <FaList /> Add a Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/bookings'>
                                    <FaCalendar /> My Bookings
                                </NavLink>
                            </li>
                        </>
                    )}

                    <div className="divider"></div>

                    {/* Shared nav links between admin and user */}
                    <li>
                        <NavLink to='/'>
                            <FaHome /> Home
                        </NavLink>
                        <NavLink to='/menu'>
                            <MdFoodBank /> Menu
                        </NavLink>
                        <NavLink to='/order/salad'>
                            <FaFirstOrder /> Order
                        </NavLink>
                        <NavLink to='/contract'>
                            <MdEmail /> Contract
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 ml-64">
                <Outlet />
            </div>
        </div>
    );
};

export default Deshboard;
