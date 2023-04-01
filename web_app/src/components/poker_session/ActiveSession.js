import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const ActiveSession = () => {

    const [isLoading, setLoading] = useState(true);
    let [session, setSession] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getSessions();
        const storedValue = localStorage.getItem('rebuys');
        if (storedValue) {
            setInputValue(storedValue);
        } else {
            setInputValue(0);
        }
    }, []);

    let getSessions = () => {
        const url = 'http://127.0.0.1:8000/api/sessions/active/';
        axios.get(url)
        .then(response => {
            if (Object.keys(response.data).length === 0) {
                setSession(null)
            } else {
                setSession(response.data)
            }
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        });
    }

    const updateRebuys = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        localStorage.setItem('rebuys', newValue);
    };

    function getFormattedDate(date) {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
        return formattedDate
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    } else if (!session) {
        return (
            <div className="active-session">
                <Link to={"/sessions/start"}>Start new session</Link>
            </div>
        )
    } else {
    return (
        <div className="active-session">
            <h2>Active session:</h2>
            <div className="active-session">
                <p>Started: { getFormattedDate(session.start) }</p>
                <label htmlFor="rebuys_already">Rebuys</label>
                <input id="rebuys_already" name="rebuys_already" type="number" value={inputValue} min="0" step="1" onChange={updateRebuys}></input>
                <Link to={"/sessions/end"} state={{ session_id: session.id }}>End session</Link>
            </div>
        </div>
    )
    }
}

export default ActiveSession
