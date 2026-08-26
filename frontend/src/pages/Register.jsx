import { Link } from "react-router-dom";
import "./register.css";

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


                <form className="register-form">

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="firstName">
                                First Name
                            </label>

                            <input
                                type="text"
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
                            placeholder="Enter your phone number"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="registerPassword">
                            Password
                        </label>

                        <input
                            type="password"
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