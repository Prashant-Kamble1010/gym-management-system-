import { Link } from "react-router-dom";
import "./login.css";

function Login() {
    return (
        <main className="auth-page">

            <div className="auth-container">

                <div className="auth-header">

                    <p>WELCOME BACK</p>

                    <h1>
                        LOGIN TO <span>GYMFIT</span>
                    </h1>

                    <span>
                        Continue your fitness journey with us.
                    </span>

                </div>


                <form className="auth-form">

                    <div className="form-group">
                        <label htmlFor="email">
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </div>


                    <div className="form-options">

                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>

                        <a href="#">
                            Forgot Password?
                        </a>

                    </div>


                    <button type="submit" className="auth-btn">
                        LOGIN
                        <span> →</span>
                    </button>

                </form>


                <div className="auth-footer">

                    <p>
                        Don't have an account?
                    </p>

                    <Link to="/register">
                        Create an Account
                    </Link>

                </div>

            </div>

        </main>
    );
}

export default Login;