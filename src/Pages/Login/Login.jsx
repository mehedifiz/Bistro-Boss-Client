import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Authcontext } from "../../firebase/Providers/Authprovider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import img from '../../assets/others/authentication1.png'
import { RiRobot2Fill } from "react-icons/ri";

const Login = () => {
    const captchaRef = useRef();
    const [allow , setAllow] = useState(true);
    const {login } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname;
    console.log(from)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin =( e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email , password)

        login(email, password)
  .then((res) => {
    const user = res.user;

    navigate(from ? from : '/' ,{replace: true})


    toast.success("Logged in successfully!");
  })
  .catch((err) => {
    toast.error("Login failed! Please check your credentials.");
  });


    }


    const validate =()=>{
        const user_captcha_value = captchaRef.current.value;
      
        if (validateCaptcha(user_captcha_value)){
             setAllow(false);
             
            } 
            else{
              return  setAllow(true)
            }
      }
    return (
      <>
       <Helmet>
                <title>Bistro |Login</title>

            </Helmet>
        <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse justify-around">
          <div className="text-center md:block lg:block hidden   md:w-1/2 lg:text-left">
            <img src={img} alt="" />
          </div>
          
          <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
          
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center mb-2">Login here  !</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate/>
                </label>
                <div className="flex border">
                <input type="text" ref={captchaRef} name="captcha" placeholder="Type the captcha" className="input input-bordered w-5/6" required />
                <button type="button" className="btn btn-square " onClick={validate}><RiRobot2Fill /></button>
                </div>
              </div>
              <div className="form-control mt-6">
                <button disabled={allow} type="submit" className="btn btn-primary">Login</button>
              </div>
          <p className="">New Here ?  <Link to='/signup'><span className="link text-orange-500 font-bold" > Signup Here.</span></Link></p>
            </form>
          </div>
        </div>
      </div></>
    )
  }
  
  export default Login
     