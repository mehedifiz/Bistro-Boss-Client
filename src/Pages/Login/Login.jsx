import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef();
    const [allow , setAllow] = useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin =( e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({email , password})

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
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row lg:flex-row">
          <div className="text-center  md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
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
                <button className="btn btn-square " onClick={validate}>DD</button>
                </div>
              </div>
              <div className="form-control mt-6">
                <button disabled={allow} type="submit" className="btn btn-primary">Login</button>
              </div>
          <p className="">New Here ?  <Link to='/signup'><span className="link text-orange-500 font-bold" > Signup Here.</span></Link></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login
     