import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../Component/Loading/Loading';

const PrivetRouter = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation() 
            if(loading){
                return <Loading />
            }
            if(!user){
                return <Navigate state={location.pathname} to={'/login'}></Navigate>
            }
            return children
};

export default PrivetRouter;