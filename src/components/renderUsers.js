import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const registerUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate('/login');

    const handleChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username);
        setUsername("");
        setPassword("");
        console.log(password);
        history.push("/users");
    };

    return (
        <div id="container">
            <div id="navbar">Create Account</div>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export const userLogin = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleChange = (event) => {
        event.preventDefault();
        if (!username || !password) {
            return;
        }
    };

    const handleSubmit = (event) => {
        console.log(username);
        setUsername("");
        setPassword("");
        console.log(password);
        history.push('users/me');
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



export default userDataProfile = ({ token }) => {
    const [userData, setUserData] = useState(null);
    const [editPost, setEditPost] = useState(false);
    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();
        setEditPost(true);
    };

    
};

//export default renderUsers;