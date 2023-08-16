const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

//Users
export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password,
                    },
                }),
            });
        const result = await response.json();
        localStorage.setItem("token", result.token);
        console.log(result)
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const userLogin = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const result = await response.json();
        localStorage.setItem("token", result.token);
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const userData = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const myData = async (username, token) => {
    try{
        const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

//Activities
export const getAllActivities = async () => {
    try{
        const response = await fetch(`${BASE_URL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const postNewActivity = async (name, description) => {
    try {
        const response = await fetch(`${BASE_URL}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                description
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const updateActivity = async (token, name, description) => {
    try{
        const response = await fetch(`${BASE_URL}/activities/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            method: "PATCH",
            body: JSON.stringify({
                name,
                description
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const publicRoutinesWithActivity = async (activityId) => {
    try {
        const response = await fetch(`${BASE_URL}/activities/${activityId}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

//Routines
export const getAllPublicRoutines = async () => {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            headers: {
                'Content-Type': 'apllication/json',
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const postNewRoutine = async (token, name, goal, isPublic) => {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                goal,
                isPublic
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const updateRoutine = async (routineId, token, name, goal) => {
    try {
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                goal
            }) 
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const deleteRoutine = async (routineId, token) => {
    try {
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const attachActivitytoRoutine = async (routineId, activityId, count, duration) => {
    try {
        const response = await fecth(`${BASE_URL}/routines/${routineId}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                activityId,
                count,
                duration
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

//Routine_Activities
export const updateRoutineActivityCount = async (routineActivityId, token, count, duration) => {
    try {
        const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                count,
                duration
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}

export const deleteActivityFromRoutine = async (routineActivityId, token) => {
    try {
        const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }   catch(err) {
        console.error(err);
    }
}