import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">

                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/global-it-geeks/src/Components/Services">Services</Link>
                <Link to="/global-it-geeks/src/Pages/About">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </ul>
        </nav>
    );
}
