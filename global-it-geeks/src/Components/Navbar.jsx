import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/">Home</Link></li>
                <li className="navbar-item"><Link to="/trainings">Courses</Link></li>
                <li className="navbar-item"><Link to="/services">Services</Link></li>
                <li className="navbar-item"><Link to="/paymentcta">Pricing</Link></li>
                <li className="navbar-item"><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    );
}

