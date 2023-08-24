import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
    Navbar,
    Profile,
    renderUsers,
    renderActivities,
    renderRoutines,
    RenderRoutine_Activities
} from "./components";

const App = () => {
    const [token, setToken] = useState(localStorage.getitem("token") || "");
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

                <Routes>
                    <Route path="/"></Route>
                    <Route exact path="/register"><Register setToken={setToken} /></Route>
                    <Route exact path="/login"><RenderUsers setToken={setToken} /></Route>
                    <Route exact path="/profile"><Profile token={token} user={user} setUser={setUser} activities={activities} setActivities={setActivities} routines={routines} setRoutines={setRoutines} userRoutines={userRoutines} setUserRoutines={setUserRoutines} /></Route>
                    <Route exact path="/routines"><RenderRoutines token={token} user={user} setUser={setUser} routines={routines} setRoutines={setRoutines} userRoutines={userRoutines} setUserRoutines={setUserRoutines} /></Route>
                    <Route exact path="/activities"><RenderActivities token={token} activities={activities} setActivities={setActivities} /></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));