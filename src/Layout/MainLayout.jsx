import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default MainLayout;