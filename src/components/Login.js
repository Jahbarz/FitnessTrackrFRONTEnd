import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "../api";


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
            const result = await userLogin(username, password);
            localStorage.setItem("token", result.token);
            setToken(result.token);
            setUsername("");
            setPassword("");
            console.log("You're Logged In");
            navigate('/Profile');
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
                <Link to="/Register">Don't have an account? Register today!</Link>
            </form>
        </div>
    );
};

export default Login;