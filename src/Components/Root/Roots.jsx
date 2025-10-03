import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sideber from '../SideBar/Sideber';
import './root.css'

const Roots = () => {

    const navigation = useNavigation()
    const isNavigation = Boolean(navigation.location);

    return (
        <div>
            <Header/>
            <div className='roots'>
                <Sideber/>
                {isNavigation && <h2>Loading...</h2>}
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Roots;