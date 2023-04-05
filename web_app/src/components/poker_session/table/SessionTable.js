import React from "react"

import SessionTableRow from "./SessionTableRow";

const SessionTable = ({ data }) => {

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
                {data.map(session => (
                    <SessionTableRow key={session.id} session={session} />
                ))}
            </tbody>
        </table>
    )
}

export default SessionTable
