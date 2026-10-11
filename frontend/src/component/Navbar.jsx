import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DumbbellIcon, MenuIcon, XIcon } from "./Icons";
import "./Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="site-navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="site-logo">
          <span className="logo-icon">
            <DumbbellIcon size={20} />
          </span>
          <span className="logo-name">
            GYM<span>FIT</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-nav-links">
          <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            Contact
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            Dashboard
          </NavLink>
        </div>

        {/* Auth Buttons */}
        <div className="nav-right-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/register" className="register-btn">
            Join Now
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-menu-drawer">
          <NavLink to="/" end className="mobile-nav-item" onClick={() => setMobileOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/contact" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>
            Contact Us
          </NavLink>
          <NavLink to="/dashboard" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>
            Dashboard
          </NavLink>
          <div className="mobile-nav-actions">
            <Link to="/login" className="mobile-login-btn" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="mobile-register-btn" onClick={() => setMobileOpen(false)}>
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;