import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../UseAxios/UseAxiosSecure';
import useAuth from '../useAuth';

const UseRole = () => {
const {user} = useAuth();
const axiosSecure = UseAxiosSecure();


const {isLoading : roleLoading, data: role = 'student'} = useQuery({
    queryKey : ['user role', user?.email],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/users/${user?.email}/role`)
        return res.data?.role || 'student';
    }
})

    return  {role, roleLoading}
};

export default UseRole;