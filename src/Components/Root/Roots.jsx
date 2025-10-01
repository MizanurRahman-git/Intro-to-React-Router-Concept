import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sideber from '../SideBar/Sideber';
import './root.css'

const Roots = () => {
    return (
        <div>
            <Header/>
            <div className='roots'>
                <Sideber/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Roots;