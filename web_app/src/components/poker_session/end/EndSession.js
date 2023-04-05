import { Link, useLocation } from "react-router-dom"
import EndSessionForm from "./EndSessionForm";

const EndSession = () => {

    const location = useLocation();
    const { session_id } = location.state;

    return (
        <div className="body">
            <h1>End session</h1>
            <EndSessionForm session_id={session_id}/>
            <Link to={'/sessions'}>Back</Link>
        </div>
    )
}

export default EndSession
