import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import UseAxiosSecure from '../../../Hooks/UseAxios/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Component/Loading/Loading';

const ModeratorProfile = () => {
    const {user} = useAuth();
const axiosSecure = UseAxiosSecure();


const { data: userProfile = [], isLoading} = useQuery({
    queryKey : ['user', user?.email],
    queryFn: async ()=>{
        const result = await axiosSecure.get(`/users/${user?.email}`);
        return result.data;
        
    }
});
const userProfiles = userProfile[0] || {};
{isLoading && <Loading />}
    return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4">
<div className="text-center space-y-4 bg-[#EBE7E4] p-4 w-10/12 md:w-8/12 lg:w-4/12 mx-auto">
  <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 mx-auto overflow-hidden rounded-full border-5 border-white">
    <img
      src={userProfiles?.photoURL || 'https://via.placeholder.com/150'}         
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
  <h2 className="text-base text-secondary font-bold">
    Name : <span className="text-primary"> {userProfiles?.displayName}</span>
  </h2>
  <h2 className="text-base text-secondary font-bold">
    Email : <span className="text-primary"> {userProfiles?.email}</span>
  </h2>
  <h2 className="text-base text-secondary font-bold">
    Your Role : <span className="text-primary"> {userProfiles?.role}</span>
  </h2>
</div>
      </div>
    </div>
    );
};

export default ModeratorProfile;