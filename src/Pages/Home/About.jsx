import React from 'react';
import img from '../../assets/home/chef-service.jpg'; // Path to your background image

const About = () => {
    return (
        <div
            className="min-h-96 bg-fixed  my-10 flex items-center justify-center"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        > 
        
            <div className="bg-white bg-opacity-90 p-10 rounded-md shadow-lg max-w-3xl text-center">
                
                <h1 className="text-4xl font-bold mb-4">Bistro Boss</h1>
                <p className="text-lg text-gray-700">
                    At Bistro Boss, we pride ourselves on delivering a culinary experience like no other.
                    Our chef-driven menu highlights seasonal ingredients in simple, handcrafted dishes served
                    straight from our kitchen. We’re committed to quality and excellence in every plate we serve.
                </p>
            </div>
        </div>
    );
};

export default About;
