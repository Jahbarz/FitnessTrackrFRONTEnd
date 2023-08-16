import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
    Navbar,
    renderUsers,
    renderActivities,
    renderRoutines,
    renderRoutine_Activities
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
                    <Route exact path="/login"><renderUsers setToken={setToken} /></Route>
                    <Route exact path="/routines"><renderRoutines token={token} user={user} setUser={setUser} routines={routines} setRoutines={setRoutines} userRoutines={userRoutines} setUserRoutines={setUserRoutines} /></Route>
                    <Route exact path="/activities"><renderActivities token={token} activities={activities} setActivities={setActivities} /></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));