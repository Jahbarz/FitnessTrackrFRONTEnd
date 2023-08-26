import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllActivities, postNewActivity, updateActivity, publicRoutinesWithActivity } from '../api';

export const AllActivities = ({ token, activities, setActivities }) => {
    const [search, setSearch] = useState("");
    const [searching, setSearching] = useState(false);
    const [addActivity, setAddActivity] = useState("");

    useEffect(() => {
        getAllActivities()
            .then(data => setActivities(data))
            .catch(error => console.error("Error fetching activities:", error));
    }, []);


    const handleAddActivity = (event) => {
        const { name, description } = event.target;
        setAddActivity((prevActivity) => ({...prevActivity, [name]: value, [description]: value}));
    };
    const handleSubmitNewActivity = () => {
        postNewActivity(addActivity, token)
            .then((response) => {
                setActivities([...activities, response]);
                setAddActivity({ name:'', description:''});
            })
            .catch((error) => {
                console.error('Error posting new activity:', error);
            });
    };
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
        return activities.filter((activity) => activity.name.includes(search));
    };
    const filteredActivities = searchActivity(search, activities);


    return (
        <div className='activities'>
            {addActivity && (
                <div>
                    <Link to="/activities/add">Post New Activity</Link>
                        <form>
                            <input
                                type="text"
                                name="name"
                                placeholder="Activity Name"
                                value={addActivity.name}
                                onChange={handleAddActivity}
                            />
                            <input
                                type="text"
                                name="goal"
                                placeholder="Activity Description"
                                value={addActivity.description}
                                onChange={handleAddActivity}
                            />
                            <button type="button" onClick={handleSubmitNewActivity}>
                                Add Activity
                            </button>
                        </form>
                </div>
            )}
            <input
                type="text"
                name="Search"
                value={search}
                onChange={handleSearch}
            />
            
            {filteredActivities.map((activities) => (
                <li key={activities.id}>
                    <h3>{activities.name}</h3>
                    <p>{activities.description}</p>
                </li>
            ))}
            
        </div>
    );
};


export default AllActivities;