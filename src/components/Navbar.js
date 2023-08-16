import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = ({ token, setToken }) => {
    const logOut = () => {
        localStorage.removeItem("token");
        window.location.replace('/Login');
    };
    return (
        <>
            <Link to="/Login">Login</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Posts">Posts</Link>
            <Link to="/Login" onClick={logOut}>logOut</Link>
        </>
    );
};

export default Navbar;