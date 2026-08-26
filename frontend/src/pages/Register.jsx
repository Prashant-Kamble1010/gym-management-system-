import { Link } from "react-router-dom";
import "./register.css";
import { registerUser } from "../services/authService";

const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const userData = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        phone: form.phone.value,
        password: password,
        confirmPassword: confirmPassword
    };

    try {
        const response = await fetch(
            "http://localhost:8081/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );

        const data = await response.text();

        console.log("Backend response:", data);

        if (response.ok) {
            alert(data);
        } else {
            alert("Registration failed: " + data);
        }

    } catch (error) {
        console.error("Registration error:", error);
        alert("Cannot connect to backend");
    }
};

function Register() {
    return (
        <main className="register-page">

            <div className="register-container">

                <div className="register-header">

                    <p>START YOUR JOURNEY</p>

                    <h1>
                        JOIN <span>GYMFIT</span>
                    </h1>

                    <span>
                        Create your account and start your transformation.
                    </span>

                </div>


                <form className="register-form" onSubmit={handleRegister}>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="firstName">
                                First Name
                            </label>

                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">
                                Last Name
                            </label>

                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last name"
                            />
                        </div>

                    </div>


                    <div className="form-group">
                        <label htmlFor="registerEmail">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            id="registerEmail"
                            placeholder="Enter your email"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="phone">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="registerPassword">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            id="registerPassword"
                            placeholder="Create a password"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                        />
                    </div>


                    <label className="terms">
                        <input type="checkbox" />

                        <span>
                            I agree to the Terms & Conditions
                        </span>
                    </label>


                    <button type="submit" className="register-btn">
                        CREATE ACCOUNT
                        <span> →</span>
                    </button>

                </form>


                <div className="register-footer">

                    <p>
                        Already have an account?
                    </p>

                    <Link to="/login">
                        Login Here
                    </Link>

                </div>

            </div>

        </main>
    );
}

export default Register;