import { Link } from "react-router-dom";
import { DumbbellIcon, MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "./Icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="simple-site-footer">
      <div className="footer-content-wrap">
        <div className="footer-cols-grid">
          {/* Brand */}
          <div className="footer-col-main">
            <Link to="/" className="footer-brand-title">
              <span className="footer-icon-box">
                <DumbbellIcon size={20} />
              </span>
              <span>GYM<strong className="text-orange">FIT</strong></span>
            </Link>
            <p className="footer-about-text">
              Pune's trusted fitness center equipped with imported weights, cardio machines, and certified personal trainers to help you achieve real results.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-col-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/dashboard">Member Dashboard</Link></li>
              <li><Link to="/register">Join Membership</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="footer-col-contact">
            <h4>Location & Hours</h4>
            <div className="footer-info-row">
              <MapPinIcon size={16} className="text-orange" />
              <span>123 Fitness Street, FC Road, Pune 411005</span>
            </div>
            <div className="footer-info-row">
              <PhoneIcon size={16} className="text-orange" />
              <span>+91 9860883426</span>
            </div>
            <div className="footer-info-row">
              <MailIcon size={16} className="text-orange" />
              <span>support@gymfitpune.com</span>
            </div>
            <div className="footer-info-row">
              <ClockIcon size={16} className="text-orange" />
              <span>Mon - Sat: 5:00 AM - 11:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} GymFit Pune. All rights reserved.</p>
          <div className="footer-extra-links">
            <Link to="/about">About</Link>
            <span>•</span>
            <Link to="/contact">Contact</Link>
            <span>•</span>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
