import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

export const Register = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const navigate = useNavigate();

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await registerUser(username, password, setToken);
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            console.log("Registered Successfully.");
            navigate("/login");      
        }   catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div id="container">
            <div id="navbar">Create Account</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter Username"
                        onChange={(event)=> setUsername(event.target.value)}
                    />
                </label>
                <label htmlFor="password">Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </label>
                <label htmlFor="confirmPassword">Confirm Password:
                    <input
                        type="password"
                        name="password"
                        value={confirmPassword}
                        placeholder="Re-Enter Password"
                        onChange={(event) => setConfirmPassword(event.target.value)} 
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;