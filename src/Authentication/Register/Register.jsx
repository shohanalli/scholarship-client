import React from 'react';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
import { Link } from 'react-router';
import Image from '../../image/register.png'

const Register = () => {
    return (
<div className=' flex flex-col md:flex-row w-[95%] md:w-[90%] mx-auto justify-between items-center min-h-screen'> 
    <div className='flex-1 flex-end'>
    <img src={Image} alt="" />
</div>
<div className="card bg-white/50 mt-15 md:mt-0 flex-1 w-full max-w-sm shrink-0 shadow-2xl">
            <div className='card-body'>
                <h2 className='text-4xl text-secondary font-semibold text-center pt-5'>Create a Account</h2>
            <form onSubmit={``}>
        <fieldset className="fieldset">
          {/* photo */}
         
           <label className="label" >Your Photo</label>
          <input type="file" className="file-input" placeholder="chose photo" />
          {/* name  */}
           <label className="label" >Name</label>
          <input type="text" className="input" placeholder="Full name" />
          {/* email */}
          <label className="label" >Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
            </form>
            <SocialLogin></SocialLogin>
            <Link state={location.state} to={'/login'} className='text-center font-semibold'>already have an account? <span className='text-base text-secondary  border-b'>Login</span></Link>
        </div>
</div>

</div>
    );
};

export default Register;