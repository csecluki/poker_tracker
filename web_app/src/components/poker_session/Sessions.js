import ActiveSession from "./ActiveSession";
import SessionTable from "./table/SessionTable";


const Sessions = () => {

    return (
        <div className="body">
            <h1>Sessions</h1>
            <ActiveSession />
            <SessionTable />
        </div>
    )
}

export default Sessions
