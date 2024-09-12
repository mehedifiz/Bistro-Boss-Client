import React from 'react';
import Banner from './Banner';
import Category from '../Category/Category';
import About from './About';
import PopularMenu from './PopularMenu';
import Callus from './Callus';
import Featured from './Featured';
import Testmonials from './Testmonials';

const Home = () => {
    return (
        <div>
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