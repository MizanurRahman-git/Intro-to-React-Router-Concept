import React from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/gallary">Gallary</NavLink>
                <NavLink to="/blog">Blogs</NavLink>
                <NavLink to="/user">Users</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;