import React from 'react';
const  img = 'https://i.ibb.co.com/g7HZ796/pexels-photo-262918.jpg'; 

const About = () => {
    return (
        <div
            className="min-h-96 bg-fixed bg-cover bg-center my-10 flex items-center justify-center"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className="bg-white bg-opacity-90 p-10 rounded-md shadow-lg max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-4">About Bite-Bazar</h1>
                <p className="text-lg text-gray-700">
                    Welcome to Bite-Bazar, your ultimate destination for exploring a diverse range of cuisines and flavors. 
                    Our mission is to connect food lovers with the finest culinary experiences, from local favorites to international delights.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                    Bite-Bazar ensures every meal brings quality and variety to your plate. With an emphasis on fresh ingredients 
                    and handcrafted dishes, we invite you to discover new tastes and cherish old favorites with ease.
                </p>
            </div>
        </div>
    );
};

export default About;
