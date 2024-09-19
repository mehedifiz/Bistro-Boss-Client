import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navber from '../Pages/Shared/Navber';

const Main = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes('login');
    return (
        <div>
          { isLogin || <Navber></Navber>}
            <Outlet></Outlet>

            { isLogin ||   <Footer></Footer>}
        </div>
    );
};

export default Main;