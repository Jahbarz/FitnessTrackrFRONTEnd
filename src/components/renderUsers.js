import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, userLogin } from "../api";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await registerUser(username, password);
            console.log("Registered Successfully.");
            setUsername("");
            setPassword("");        
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
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export const Login = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await userLogin(username, password);
            localStorage.setItem("token", result.token);
            setToken(result.token);
            console.log("You're Logged In");
            setUsername("");
            setPassword("");
            navigate('users/me');
        }   catch (error) {
            console.error("LogIn Falied:", error);
        }
    };

    return (
        <div id="container">
            <div id="navbar">Login</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Login</button>
                <Link to="/register">Don't have an account? Register today!</Link>
            </form>
        </div>
    );
};

export default RenderUsers;