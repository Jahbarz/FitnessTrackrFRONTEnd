import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
    userData,
    userRoutinesData,
    getAllActivities,
    postNewActivity,
    updateActivity,
    postNewRoutine,
    updateRoutine,
    deleteRoutine,
    attachActivitytoRoutine,
    updateRoutineActivityCount,
    deleteActivityFromRoutine
} from "../api";


export const Profile = ({ token, user, setUser, userRoutines, setUserRoutines }) => {
    //const [editPost, setEditPost] = useState(false);
    const [username, setUsername] = useState("");
    const [routineId, setRoutineId] = useState(null);
    const [routineName, setRoutineName] = useState("");
    const [activities, setActivities] =useState([]);
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        setEditPost(true);
    };

    useEffect(() => {
        getAllActivities(setActivities);
    }, []);

    useEffect(() => {
        async function profileData() {
            const user = await userData(token);
            const routines = await userRoutinesData(user.username, token);
            setUser(user.username);
            setUserRoutines(routines);
        }
        profileData()
    }, []);

    const handleSubmit = async() => {
        event.preventDefault();
        if (!update) {
            const newRoutine = await postNewRoutine(user.username, token);
            setUserRoutines((prevRoutines) => [...prevRoutines, newRoutine]);
        }

    };

    return (
        <div className="profile">
            {userData ? (
                <div key={userData.id}>
                    <h1>Welcome, {`${userData.username}`}!</h1>
                    <button onClick={handleClick}>Edit Profile</button>
                    <button onClick={handleSubmit}> Create Routine</button>
                </div>
                
            ) : (
                <p>Sign In to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;