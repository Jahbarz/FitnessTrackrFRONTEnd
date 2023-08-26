import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { getAllPublicRoutines } from "../api";

export const AllPublicRoutines = ({ routines, setRoutines }) => {
    const [search, setSearch] = useState("");
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        getAllPublicRoutines()
            .then(data => setRoutines(data))
            .catch(error => console.error("Error fetching routines:", error));
    }, []);

    const handleSearch = (event) => {
        const searchText = event.target.value;
        setSearch(searchText);
        setSearching(searchText !== "");
      };

      const searchRoutines = (search, routines) => {
        return routines.filter((routine) => routine.name.includes(search));
      };
     
      const filteredRoutines = searching ? searchRoutines(search, routines) : routines;
    

    return (
        <div className='publicRoutines'>
            <h1>Public Routines</h1>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
            />
            <div>
                {filteredRoutines.map((routine) => (
                    <div key={routine.id}>
                        <h3>{routine.name}</h3>
                        <h4>{routine.creatorId}</h4>
                        <p>{routine.goal}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default AllPublicRoutines;