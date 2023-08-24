import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
    userData,
    myData,
    postNewActivity,
    updateActivity,
    postNewRoutine,
    updateRoutine,
    deleteRoutine,
    attachActivitytoRoutine,
    updateRoutineActivityCount,
    deleteActivityFromRoutine
} from "../api";


export const Profile = ({ token }) => {
    const [userData, setUserData] = useState(null);
    const [editPost, setEditPost] = useState(false);
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        setEditPost(true);
    };

    useEffect(() => {
        if (token) {
            myData().then((data) => {
                setUserData(data);
            });
        }   else {
            setUserData(null);
        }
    }, [!token]);

    useEffect(() => {
        if (userData) {
            localStorage.setItem("userData", JSON.stringify(userData));
        }
    }, [userData]);

    return (
        <div className="profile">
            {userData ? (
                <div className="user-page">
                    <h1>Welcome, {userData.username}!</h1>
                    <p>Email: {userData.email}</p>
                    <button onClick={handleClick}>Edit Profile</button>
                </div>
            ) : (
                <p>Sign In to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;