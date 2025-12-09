import axios from 'axios';
import React, { useEffect } from 'react';

import { useNavigate } from 'react-router';
import useAuth from '../useAuth';
const axousSecure = axios.create({
  baseURL: 'http://localhost:3000',

});
const UseAxiosSecure = () => {
  const {user, signOutFunction} = useAuth();
  const naviget = useNavigate()


  useEffect(()=>{
      if (!user) return;
      // interceptor request 
    const reqInterCeptor = axousSecure.interceptors.request.use(async(config) =>{
      // const token = await user.getIdToken();
      config.headers.Authorization =`Bearer ${user?.accessToken}`
      return config
    })
    //interceptor response
   const resInterCeptor = axousSecure.interceptors.response.use((response) =>{
    return response;
    },(error)=>{
      const statuscode = error.status;
      if(statuscode === 401 || statuscode === 403){
        signOutFunction()
        .then(()=>{
          naviget('/login')
        })

      }
      return Promise.reject(error)
    })

    return ()=>{
      axousSecure.interceptors.request.eject(reqInterCeptor);
      axousSecure.interceptors.request.eject(resInterCeptor)
    }
  },[user, naviget, signOutFunction])




    return axousSecure
};

export default UseAxiosSecure;