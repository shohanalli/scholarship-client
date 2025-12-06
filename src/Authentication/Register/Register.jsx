import React from 'react';

import { Link, useLocation, useNavigate } from 'react-router';
import Image from '../../image/register.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
const {register, handleSubmit, formState:{errors} }= useForm()
const {createUser, updateUserProfile} = useAuth()
const navigate = useNavigate();
const location = useLocation();
const handelRegesterFrom = (data) =>{
    console.log('register button click', data)
    createUser(data.email, data.password)
    .then(()=>{
    const updateProfile = {
        photoURL: '',
        displayName: data.name,
    } 
     
    updateUserProfile(updateProfile)
          .then(()=>{
            toast.success('Register successfully!!!')
            navigate(location?.state || '/');
          })
          .catch(err=>{
            toast.error(err)}
        )    
    })


}






    return (
<div className=' flex  flex-col-reverse md:flex-row w-[95%] md:w-[90%] mx-auto justify-between items-center min-h-screen'> 
    <div className='flex-1 flex-end mt-10 md:mt-0'>
    <img src={Image} alt="" />
</div>
<div className="card bg-white/50 mt-10 md:mt-0 flex-1 w-full max-w-sm shrink-0 shadow-2xl">
            <div className='card-body'>
                <h2 className='text-4xl text-secondary font-semibold text-center pt-5'>Create a Account</h2>
            <form onSubmit={handleSubmit(handelRegesterFrom)}>
        <fieldset className="fieldset">
          {/* photo */}
           <label className="label" >Your Photo</label>
          <input type="file" className="file-input" placeholder="chose photo" {...register('photo')} />
          {/* name  */}
           <label className="label" >Name</label>
          <input type="text" className="input" placeholder="Full name" {...register('name', {required: true})}/>
          {/* email */}
          <label className="label" >Email</label>
          <input type="email" className="input" placeholder="Email" {...register('email', {required: true})}/>
          {errors.email?.type === 'required' && <span className='text-red-700'>Must be needed</span>}
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register('password',{
            required: true,
            minLength: 6,
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
          })} />
            {
            errors.password?.type === 'require' && <p className='text-red-700'>Must be need</p>
          }
            {errors.password?.type === 'minLength' && <p className='text-red-700'>Must be need 6 carecter</p>
          }
          {
            errors.password?.type==='pattern' && <p className='text-red-800'>Your password is not strong</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
            </form>
            <SocialLogin />
            <Link state={location.state} to={'/login'} className='text-center font-semibold'>already have an account? <span className='text-base text-secondary  border-b'>Login</span></Link>
        </div>
</div>

</div>
    );
};

export default Register;