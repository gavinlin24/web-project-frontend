import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Site Name
            </Link>
            <ul className="text">
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;