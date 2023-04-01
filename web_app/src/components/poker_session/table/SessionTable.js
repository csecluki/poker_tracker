import React, { useState, useEffect } from "react";
import axios from 'axios';

import SessionTableRow from "./SessionTableRow";

const SessionTable = () => {

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
        <table className="session-table">
            <thead>
                <tr>
                    <th>
                        Account
                    </th>
                    <th>
                        End
                    </th>
                    <th>
                        Duration
                    </th>
                    <th>
                        Tables
                    </th>
                    <th>
                        Rebuys
                    </th>
                    <th>
                        Hands
                    </th>
                    <th>
                        Result
                    </th>
                </tr>
            </thead>
            <tbody>
                {sessions.map(session => (
                    <SessionTableRow key={session.id} session={session} />
                ))}                
            </tbody>
        </table>
    )
}

export default SessionTable
