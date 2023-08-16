import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllActivities, postNewActivity, updateActivity, publicRoutinesWithActivity } from '../api';

export const allActivities = async ({ token }) => {
    const [activities, setActivities] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate("/users");

    const handleSearch = (event) => {
        e.preventDefault();
        const searchActivity = event.target.value;
        setSearch(searchText);
        setSearching(true);
            if (searchText === "") {
                setSearching(false);
            };
    };
    const getSearchActivity = (search, activities) => {
        return activities.filter((activity) => activity.title.includes(search));
    };
    const filterActivities = getSearchActivity(search, activities);

    useEffect(() => {
        async function getActivities() {
            const data = await fetchActivities()
            setActivities(data)
            setLoading(false)
        }
        getActivities()
    }, [])

    return(
        <>
            {addPost === true && <Link to="/activities">Post Activity</Link>}
            <label htmlFor="search">Search for Activity</label>
            <input
                type="text"
                name="Search"
                value={search}
                onChange={handleSearch}
            />
            {searching === true && (
                <div>
                    {filterActivities.map((value) => (
                        <h1 key={value.title}>{value.title}</h1>
                    ))}
                </div>
            )}
        </>
    );
};

export const addNewActivity = ({ token }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        createActivity();
        setTitle("");
        setDescription("");
        history.push("/activities");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Activity</h1>
            <label htmlFor="title">Activity Name</label>
            <input
                type="text"
                name="Activity Name"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            ></input>
            <label htmlFor="description">Describe your activity</label>
            <input
                type="text"
                name="Activity Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            ></input>
            <button type="post">Post Activity</button>
        </form>
    );
};

export default renderActivities;