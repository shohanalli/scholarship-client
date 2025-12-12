import React from 'react';
import useAuth from '../../Hooks/useAuth';
import UseRole from '../../Hooks/Userole/UseRole';
import Loading from '../../Component/Loading/Loading';
import img from '../../image/forbidden.png'
import { Link } from 'react-router';
const AdminRouter = ({children}) => {
const {loading, user} = useAuth()
    const {role, roleLoading} = UseRole();
    if (loading || !user || roleLoading){
        return <Loading /> 
    }
if(role !== 'admin'){
    return <>
    <div className="min-h-screen text-center justify-center py-5 px-4 w-11/12 mx-auto">
      <div className="text-center space-y-4">
        <img
          src={img}
          alt="Cancel"
          className="mx-auto w-50 md:w-65 lg:w-80 object-contain"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          You are Not a Admin
        </h2>
      </div>
        <div className='flex flex-col md:flex-row justify-center space-y-3 py-5'>
    <Link to={'/'} className='btn bg-secondary text-white'>Go home</Link>
    <Link to={'/dashboard'} className='btn bg-primary'>Go Dashboard</Link>
        </div>
    </div>

    </>
}

    return children
};

export default AdminRouter;