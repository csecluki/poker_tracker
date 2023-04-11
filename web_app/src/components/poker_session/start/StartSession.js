import { Link } from "react-router-dom"
import StartSessionForm from "./StartSessionForm";

const StartSession = () => {

    return (
        <div className="body">
            <h1>Start session</h1>
            <StartSessionForm />
            <Link className="back" to={'/sessions'}>Back</Link>
        </div>
    )
}

export default StartSession
