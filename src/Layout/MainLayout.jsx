import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='sticky top-0 z-50'>
            <Header />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;