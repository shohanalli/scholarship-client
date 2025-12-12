import React from 'react';
import useAuth from '../../Hooks/useAuth';
import UseRole from '../../Hooks/Userole/UseRole';
import Loading from '../../Component/Loading/Loading';
import img from '../../image/forbidden.png'
import { Link } from 'react-router';
const ModeratorRauter = ({children}) => {
const {loading, user} = useAuth()
    const {role, roleLoading} = UseRole();
    if (loading || !user || roleLoading){
        return <Loading /> 
    }
if(role !== 'moderator'){
    return <>
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h2 className="text-base text-secondary font-bold">
         Forbidden Error
        </h2>
        <img
          src={img}
          alt="Cancel"
          className="mx-auto w-50 md:w-65 lg:w-80 object-contain"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          You are Not a Moderator
        </h2>
      </div>
    <Link to={'/'} className='btn bg-secondary text-white'>Go home</Link>
    <Link to={'/dashboard'} className='btn bg-primary'>Go Dashboard</Link>
    </div>

    </>
}

    return children
};

export default ModeratorRauter;