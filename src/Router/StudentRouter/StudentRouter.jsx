import React from 'react';
import useAuth from '../../Hooks/useAuth';
import UseRole from '../../Hooks/Userole/UseRole';
import Loading from '../../Component/Loading/Loading';
import img from '../../image/forbidden.png'
import { Link } from 'react-router';
const StudentRouter = ({children}) => {
    const {loading, user} = useAuth()
    const {role, roleLoading} = UseRole();
    if (loading || !user || roleLoading){
        return <Loading /> 
    }
if(role !== 'student'){
    return <>
    <div className="min-h-screen flex flex-col items-center justify-center px-2">
      <div className="text-center space-y-4">
        <h2 className=" text-secondary text-2xl font-bold">
         Forbidden Error
        </h2>
        <img
          src={img}
          alt="Cancel"
          className="mx-auto w-50 md:w-65 lg:w-80 object-contain"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          You are Not a Student 
        </h2>
      </div>
  <div className='flex flex-col md:flex-row'>
        <Link to={'/'} className='btn bg-secondary text-white'>Go home</Link>
    <Link to={'/dashboard'} className='btn bg-primary'>Go Dashboard</Link>
  </div>
    </div>

    </>
}

    return children
};


export default StudentRouter;