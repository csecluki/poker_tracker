import React, { useState, useEffect } from "react";
import axios from 'axios';

import ActiveSession from "./ActiveSession";
import SessionChart from "./chart/SessionChart";
import SessionTable from "./table/SessionTable";

const Sessions = () => {

    const [isLoading, setLoading] = useState(true);
    let [sessions, setSessions] = useState([]);

    useEffect(() => {
        getSessions()
    }, [])

    let getSessions = () => {
        const url = 'http://127.0.0.1:8000/api/sessions/ended/';
        axios.get(url)
        .then(res => {
            setSessions(res.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        });
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="body">
            <h1>Sessions</h1>
            <SessionChart chartData={sessions}/>
            <ActiveSession />
            <SessionTable data={sessions}/>
        </div>
    )
}

export default Sessions
