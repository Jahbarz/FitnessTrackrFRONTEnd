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
            { token ? null : <Link to="/Login">Login</Link>}
            <Link to="/routines">Home</Link>
            <Link to="/Profile">Profile</Link>
            {token ? (
                <Link to="/Login" onClick={logOut}>logOut</Link>
            ) : null}
            
        </>
    );
};

export default Navbar;