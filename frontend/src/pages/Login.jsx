import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockIcon, MailIcon, EyeIcon, EyeOffIcon, DumbbellIcon } from "../component/Icons";
import Toast from "../component/Toast";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const loginData = {
      email: form.email.value.trim(),
      password: form.password.value
    };

    try {
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.text();

      if (response.ok) {
        if (data && data.length > 20) {
          localStorage.setItem("token", data);
        }
        localStorage.setItem("userEmail", loginData.email);

        setToast({
          type: "success",
          message: "Login successful! Redirecting to dashboard..."
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setToast({
          type: "error",
          message: data || "Invalid email or password."
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      // Helpful fallback note
      setToast({
        type: "error",
        message: "Cannot connect to server. Please check backend port 8081."
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

      <div className="auth-simple-card">
        <div className="auth-card-top">
          <Link to="/" className="auth-brand-logo">
            <span className="logo-icon">
              <DumbbellIcon size={20} />
            </span>
            <span className="logo-name">
              GYM<span>FIT</span>
            </span>
          </Link>
          <h2>Welcome Back</h2>
          <p>Sign in to your GymFit member account</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form-fields">
          <div className="input-field">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrap">
              <MailIcon size={18} className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrap">
              <LockIcon size={18} className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
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

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? "Signing in..." : "Login to Account"}
          </button>
        </form>

        <div className="auth-card-bottom">
          <p>Don't have an account yet?</p>
          <Link to="/register" className="auth-link-bold">
            Create an Account Here
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;