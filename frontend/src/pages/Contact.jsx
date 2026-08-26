import "./contact.css";

function Contact() {
    return (
        <main className="contact-page">

            {/* Hero */}
            <section className="contact-hero">
                <p>GET IN TOUCH</p>

                <h1>
                    CONTACT
                    <span> US</span>
                </h1>

                <p className="contact-intro">
                    Have a question about our gym, memberships or training programs?
                    We'd love to hear from you.
                </p>
            </section>

            {/* Contact Content */}
            <section className="contact-section">

                {/* Contact Information */}
                <div className="contact-info">

                    <h2>Let's Talk</h2>

                    <p className="info-description">
                        Whether you are looking to start your fitness journey,
                        need information about memberships, or want to speak
                        with our team, get in touch with us.
                    </p>

                    <div className="info-item">
                        <div className="info-icon">📍</div>

                        <div>
                            <h3>Our Location</h3>
                            <p>123 Fitness Street, Pune, Maharashtra</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">☎</div>

                        <div>
                            <h3>Phone</h3>
                            <p>+91 9860883426</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">✉</div>

                        <div>
                            <h3>Email</h3>
                            <p>prashantkamble4208@gmail.com</p>
                        </div>
                    </div>

                    <div className="opening-hours">
                        <h3>Opening Hours</h3>

                        <p>
                            Monday - Saturday
                            <span> 5:00 AM - 10:00 PM</span>
                        </p>

                        <p>
                            Sunday
                            <span> 6:00 AM - 2:00 PM</span>
                        </p>
                    </div>

                </div>

                {/* Contact Form */}
                <div className="contact-form-container">

                    <h2>Send Us A Message</h2>

                    <form>

                        <div className="form-row">

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>

                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>

                            <input
                                type="text"
                                id="subject"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>

                            <textarea
                                id="message"
                                rows="6"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button type="submit" className="send-btn">
                            SEND MESSAGE
                            <span> →</span>
                        </button>

                    </form>

                </div>

            </section>

        </main>
    );
}

export default Contact;