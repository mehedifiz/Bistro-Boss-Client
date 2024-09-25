import { useForm } from "react-hook-form";
import img from '../../assets/others/authentication2.png';
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { Authcontext } from "../../firebase/Providers/Authprovider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Comonents/SocialLogin";

const Signup = () => {
    const navigate = useNavigate();
    const AxiosPublic = useAxiosPublic();

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const { createUser , updateUserProfile} = useContext(Authcontext)

    const onSubmit = data => {
        console.log(data);
        createUser(data.email , data.password)
        .then(res=>{
            const logeduser = res.user;
            console.log(logeduser)
            toast('Easy');
            navigate('/')
            updateUserProfile(data.name , data.photoURL)
            .then(()=>{

                const userInfo = {
                    name : data.name ,
                    email : data.email ,

                }

                AxiosPublic.post('/users' , userInfo)
                .then(res =>{
                    if(res.data.insertedId){
                        console.log(res)
                        alert()
                    }
                })
                reset()
               
                toast.success('User profile update');
                reset()
            })
            .catch(error =>{
                console.log(error)
            })
        })
    }

    return (
        <>

        <Helmet>
                <title>Bistro | Signup</title>

            </Helmet>
        <div className="hero  min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row lg:gap-20">
                
                {/* Image Section */}
                <div className="hidden lg:block lg:w-1/2">
                    <img src={img} alt="Signup Visual" className="rounded-lg shadow-2xl" />
                </div>

                {/* Form Section */}
                <div className="card w-full max-w-md shadow-xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        
                        <h1 className="text-5xl font-bold text-center">Sign up now!</h1>
                        <p className="py-6 text-center">
                            Join us today! Fill in your details to create your account.
                        </p>

                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input 
                                type="text" 
                                {...register('name', { required: "Name is required" })} 
                                placeholder="Write Your Name" 
                                className="input input-bordered" 
                            />
                            {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                        </div>
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input 
                                type="text" 
                                {...register('photoURL', { required: "Name is required" })} 
                                placeholder="photo URL" 
                                className="input input-bordered" 
                            />
                            {errors.photoURL && <span className="text-red-600">{errors.name?.message}</span>}
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                {...register('email', { required: "Email is required" })} 
                                placeholder="Enter your email" 
                                className="input input-bordered" 
                            />
                            {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                {...register('password', { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" }, maxLength: { value: 15, message: "Password cannot exceed 15 characters"},
                                pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])(?=.*[a-z])/
                              
                                })} 
                                placeholder="Enter your password" 
                                className="input input-bordered" 
                            />
                            {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be at least 1 uppercase , 1 lowercase , 1 number , 1 spacial characters</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className="">Already have an account ?  <Link to='/login'><span className="link text-orange-500 font-bold" > Login Here.</span></Link></p>

                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
        </>
    );
};

export default Signup;
