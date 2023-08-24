import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ token, setToken }) => {
    const logOut = () => {
        localStorage.removeItem("token");
        window.location.replace('/Login');
        console.log("Logged out");
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