import { useState } from "react";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "../component/Icons";
import Toast from "../component/Toast";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({
      type: "success",
      message: "Thank you for reaching out! We will contact you shortly."
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="contact-page">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Header */}
      <section className="contact-header">
        <span className="contact-tag">GET IN TOUCH</span>
        <h1>CONTACT US</h1>
        <p>Have questions about memberships, personal training, or timings? We are here to help.</p>
      </section>

      {/* Main Grid */}
      <section className="contact-content-section">
        <div className="contact-container">
          {/* Info Side */}
          <div className="contact-info-card">
            <h2>GymFit Pune Location</h2>
            <p className="contact-intro-text">
              Visit our facility on FC Road or reach out to our front desk directly.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>123 Fitness Street, FC Road, Shivajinagar, Pune, MH 411005</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p><a href="tel:+919860883426">+91 9860883426</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <MailIcon size={20} />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p><a href="mailto:support@gymfitpune.com">support@gymfitpune.com</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <ClockIcon size={20} />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 5:00 AM - 11:00 PM</p>
                  <p>Sunday: 6:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-box">
            <h2>Send A Message</h2>
            <p className="form-sub-desc">Leave your inquiry and our team will get back to you.</p>

            <form onSubmit={handleSubmit} className="clean-contact-form">
              <div className="field-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="field-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="field-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="field-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;