import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

    const navigate = useNavigate();
    const handleLogin = async (e) => {

        e.preventDefault();
        const form = e.target;

        const loginData = {
            email: form.email.value,
            password: form.password.value
        };

        console.log("Login Data:", loginData);

        try {

            const response = await fetch(
                "http://localhost:8081/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                }
            );

            const data = await response.text();

            console.log("Backend Response:", data);

            if (response.ok) {

                alert("Login successful!");
                navigate("/dashboard");

            } else {

                alert("Login failed: " + data);
            }

        } catch (error) {

            console.error("Login Error:", error);

            alert("Cannot connect to server");
        }
    };


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


                <form
                    className="auth-form"
                    onSubmit={handleLogin}
                >

                    <div className="form-group">

                        <label htmlFor="email">
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />

                    </div>


                    <div className="form-options">

                        <label className="remember-me">

                            <input
                                type="checkbox"
                                name="rememberMe"
                            />

                            <span>
                                Remember me
                            </span>

                        </label>

                        <a href="#">
                            Forgot Password?
                        </a>

                    </div>


                    <button
                        type="submit"
                        className="auth-btn"
                    >
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