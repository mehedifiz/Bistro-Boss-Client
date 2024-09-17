import React from 'react';
import Banner from './Banner';
import Category from '../Category/Category';
import About from './About';
import PopularMenu from './PopularMenu';
import Callus from './Callus';
import Featured from './Featured';
import Testmonials from './Testmonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Bistro | Home</title>

            </Helmet>
                <Banner></Banner> 

                <Category></Category>   
                <About></About>   

                <PopularMenu></PopularMenu>    
                <Callus></Callus> 


                    <Featured></Featured>   
                    <Testmonials></Testmonials>
       </div>
    );
};

export default Home;