import React from 'react';
import Loading from '../../../Component/Loading/Loading';
import UseRole from '../../../Hooks/Userole/UseRole';
import StudentProfile from '../../Profile/StudentProfile/StudentProfile';
import AdminProfile from '../../Profile/AdminProfile/AdminProfile';
import ModeratorProfile from '../../Profile/ModeratorProfile/ModeratorProfile';


const DashboardHome = () => {
    const {role, roleLoading} = UseRole();
    if(roleLoading){
        return <Loading />
    }

    if(role == 'admin'){
        return <AdminProfile />
    }else if(role == 'moderator'){
        return <ModeratorProfile />
    }else{
        return <StudentProfile />
    }
};

export default DashboardHome;