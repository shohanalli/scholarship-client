import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate,  } from 'react-router';
import Image from '../../image/login.png'
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const {register, handleSubmit} = useForm()
    const naviget = useNavigate();
    const location = useLocation();


    const handelLogin =()=>{

    }


    return (
        <div className=' flex flex-col md:flex-row w-[95%] md:w-[90%] mx-auto justify-between items-center min-h-screen'>
            
        <div className='flex-end'>
            <img src={Image} alt="" />
        </div>
        <div className="card bg-white/50 mt-15 md:mt-0  w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-4xl text-secondary font-semibold text-center pt-5'>Welcome Back</h2>
            <p className='text-center'>Please login</p>
      <div className="card-body">
        <form onSubmit={handleSubmit(handelLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" {...register('password')} className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <SocialLogin />
        <Link state={location.state} to={'/register'} className='text-center font-semibold'>Have Not an account? <span className='text-base text-secondary  border-b'>Register</span></Link>
      </div>
    </div>


        </div>
    );
};

export default Login;