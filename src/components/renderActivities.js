import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllActivities, postNewActivity, updateActivity, publicRoutinesWithActivity } from '../api';

export const AllActivities = ({ token }) => {
    const [activities, setActivities] = useState([]);
    const [search, setSearch] = useState("");
    const [searching, setSearching] = useState(false);
    const [addActivity, setAddActivity] = useState(false);

    useEffect(() => {
        async function fetchActivities() {
            try{
                const data = await getAllActivities();
                setActivities(data);
            }   catch (error) {
                console.error("Error Fetching Activities:", error);
            }
        }
        fetchActivities();
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            setAddActivity(true);
        }
    }, [token]);

    const handleSearch = (event) => {
        const searchText = event.target.value;
        setSearch(searchText);
        setSearching(searchText !== "");
    };

    const searchActivity = (search, activities) => {
        return activities.filter((activity) => activity.title.includes(search));
    };
    const filteredActivities = searchActivity(search, activities);

    return(
        <>
            {addActivity && <Link to="/activities/add">Post New Activity</Link>}
            <label htmlFor="search">Search for Activity</label>
            <input
                type="text"
                name="Search"
                value={search}
                onChange={handleSearch}
            />
            {searching && (
                <div>
                    {filteredActivities.map((activity) => (
                        <h1 key={activity.title}>{activity.title}</h1>
                    ))}
                </div>
            )}
        </>
    );
};

export const AddNewActivity = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const checkActivityExists = existingActivities.filter(activity => activity.title === title).length > 0;
        if (checkActivityExists) {
            setError("An activity with this title already exists.");
            return;
        }

        try {
            const response = await postNewActivity({title, description});
            const newToken = response.token;
            localStorage.setItem("token", newToken);
            setTitle("");
            setDescription("");
            navigate("/activities");
        }   catch (error) {
            console.error("New Activity Post Failed!", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Activity</h1>
            <label htmlFor="title">Activity Name</label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            ></input>
            <label htmlFor="description">Describe your activity</label>
            <input
                type="text"
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            ></input>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Post Activity</button>
        </form>
    );
};

export default renderActivities;