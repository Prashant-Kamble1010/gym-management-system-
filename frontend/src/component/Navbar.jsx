import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                GYM<span>FIT</span>
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>

            <div className="nav-actions">
                <Link to="/login" className="login-btn">
                    Login
                </Link>

                <Link to="/register" className="register-btn">
                    Register
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;