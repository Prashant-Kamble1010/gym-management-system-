import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LockIcon,
  MailIcon,
  UserIcon,
  PhoneIcon,
  EyeIcon,
  EyeOffIcon,
  DumbbellIcon
} from "../component/Icons";
import Toast from "../component/Toast";
import "./login.css";
import "./register.css";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setToast({
        type: "error",
        message: "Passwords do not match. Please re-enter."
      });
      return;
    }

    if (password.length < 6) {
      setToast({
        type: "error",
        message: "Password must be at least 6 characters."
      });
      return;
    }

    setLoading(true);

    const userData = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      password: password,
      confirmPassword: confirmPassword
    };

    try {
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await response.text();

      if (response.ok) {
        setToast({
          type: "success",
          message: data || "Registration successful! Redirecting to login..."
        });
        setTimeout(() => {
          navigate("/login");
        }, 1200);
      } else {
        setToast({
          type: "error",
          message: data || "Registration failed. Try again."
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setToast({
        type: "error",
        message: "Cannot connect to server. Please verify backend on port 8081."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="simple-auth-page">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="auth-simple-card register-card-width">
        <div className="auth-card-top">
          <Link to="/" className="auth-brand-logo">
            <span className="logo-icon">
              <DumbbellIcon size={20} />
            </span>
            <span className="logo-name">
              GYM<span>FIT</span>
            </span>
          </Link>
          <h2>Create Your Account</h2>
          <p>Join GymFit and start training with us</p>
        </div>

        <form onSubmit={handleRegister} className="auth-form-fields">
          <div className="form-row-2">
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <div className="input-wrap">
                <UserIcon size={18} className="input-icon" />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Rahul"
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <div className="input-wrap">
                <UserIcon size={18} className="input-icon" />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Sharma"
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrap">
              <MailIcon size={18} className="input-icon" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-wrap">
              <PhoneIcon size={18} className="input-icon" />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+91 98765 43210"
                required
              />
            </div>
          </div>

          <div className="form-row-2">
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className="input-wrap">
                <LockIcon size={18} className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Min 6 characters"
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrap">
                <LockIcon size={18} className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Re-enter password"
                  required
                />
                <button
                  type="button"
                  className="eye-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Register Account"}
          </button>
        </form>

        <div className="auth-card-bottom">
          <p>Already registered with GymFit?</p>
          <Link to="/login" className="auth-link-bold">
            Sign In Here
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Register;