import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;