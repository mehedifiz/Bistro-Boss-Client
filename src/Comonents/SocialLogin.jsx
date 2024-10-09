import { useContext } from 'react';
import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing social icons
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    
    const {googleLogin} =useAuth();
    const AxiosPublic = useAxiosPublic();
    const navigate = useNavigate()


    const handleGoogleLogin = () => {
        // Logic for Google login
        console.log('Google login clicked');
        googleLogin()
        .then(res =>{
            const userInfo ={
                email : res.user.email,
                name : res.user.displayName
            }

            AxiosPublic.post('/users' , userInfo)
            .then(res =>{
                navigate('/')
                
            })
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    };

    const handleGithubLogin = () => {
        // Logic for GitHub login
        console.log('GitHub login clicked');
    };

    const handleTwitterLogin = () => {
        // Logic for Twitter login
        console.log('Twitter login clicked');
    };

    return (
        <div className="flex justify-center py-2 space-x-4 ">
            {/* Google Login */}
            <button
                onClick={handleGoogleLogin}
                className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
                <FcGoogle className="mr-2 text-black" />
               
            </button>

            {/* GitHub Login */}
            <button
                onClick={handleGithubLogin}
                className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
                <FaGithub className="mr-2 text-black" />
             
            </button>

            {/* Twitter Login */}
            <button
                onClick={handleTwitterLogin}
                className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
                <FaTwitter className="mr-2 text-blue-500" />
              
            </button>
        </div>
    );
};

export default SocialLogin;
