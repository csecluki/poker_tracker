import { Link } from "react-router-dom"

const Menu = () => {

    return (
        <div>
            <Link to={'/accounts'} className="menu-item">Accounts</Link>
            <Link to={'/sessions'} className="menu-item">Sessions</Link>
        </div>
    )
}

export default Menu
