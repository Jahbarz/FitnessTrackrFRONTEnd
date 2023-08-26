import React, { useState, useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import {
    Navbar,
    Profile,
    Register,
    Login,
    AllActivities,
    AllPublicRoutines,
    RenderRoutine_Activities
} from "./components";
const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

const App = () => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [user, setUser] = useState("");
    const [activities, setActivities] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [userRoutines, setUserRoutines] = useState([]);

    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);

    return (
        <BrowserRouter>
            <div id="app">
                <Navbar token={token} setToken={setToken}/>
            </div>
            <Routes>
                <Route path="/"></Route>
                <Route path="/Register" element={<Register setToken={setToken} setUser={setUser} />} />
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/profile" element={<Profile token={token} user={user} setUser={setUser} activities={activities} setActivities={setActivities} routines={routines} setRoutines={setRoutines} userRoutines={userRoutines} setUserRoutines={setUserRoutines} />} />
                <Route path="/routines" element={<AllPublicRoutines token={token} user={user} setUser={setUser} routines={routines} setRoutines={setRoutines} userRoutines={userRoutines} setUserRoutines={setUserRoutines} />}/>
                <Route path="/activities" element={<AllActivities token={token} activities={activities} setActivities={setActivities} />}/>
            </Routes>
            
        </BrowserRouter>
    );
};

root.render(<StrictMode><App /></StrictMode>,);