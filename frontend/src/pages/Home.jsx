import { useNavigate, Link } from "react-router-dom";
import {
  DumbbellIcon,
  FlameIcon,
  TrophyIcon,
  ClockIcon,
  CheckIcon,
  StarIcon,
  ShieldIcon
} from "../component/Icons";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text-content">
            <span className="hero-tag">WELCOME TO GYMFIT PUNE</span>
            <h1 className="hero-heading">
              TRANSFORM YOUR BODY, <br />
              <span className="text-orange">ELEVATE YOUR LIFE.</span>
            </h1>
            <p className="hero-subtext">
              Reach your health and fitness goals with world-class equipment, certified personal trainers, and a supportive community built to help you succeed.
            </p>

            <div className="hero-buttons-row">
              <button
                className="btn-primary"
                onClick={() => navigate("/register")}
              >
                Start Your Journey
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  const el = document.getElementById("pricing");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Plans
              </button>
            </div>

            <div className="hero-stats-mini">
              <div className="stat-mini">
                <strong>1,500+</strong>
                <span>Active Members</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-mini">
                <strong>20+</strong>
                <span>Expert Trainers</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-mini">
                <strong>4.9 ★</strong>
                <span>Member Rating</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-side">
            <div className="hero-image-wrapper">
              <img
                src="/image.png"
                alt="GymFit Training"
                className="hero-gym-img"
              />
              <div className="hero-overlay-badge">
                <span className="badge-dot"></span>
                <span>Open Daily: 5:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY CHOOSE GYMFIT
          ======================================================== */}
      <section className="features-section">
        <div className="section-title-wrap">
          <span className="section-eyebrow">WHY CHOOSE US</span>
          <h2>EVERYTHING YOU NEED TO SUCCEED</h2>
          <p>We provide the tools, support, and atmosphere to keep you motivated every day.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <DumbbellIcon size={24} />
            </div>
            <h3>Modern Equipment</h3>
            <p>Full range of imported free weights, power racks, cable stations, and cardio machines.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <TrophyIcon size={24} />
            </div>
            <h3>Certified Trainers</h3>
            <p>Experienced coaches ready to guide your form, prevent injury, and accelerate results.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <ClockIcon size={24} />
            </div>
            <h3>Flexible Timings</h3>
            <p>Workout early morning or late night. We are open from 5:00 AM to 11:00 PM Monday through Saturday.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <ShieldIcon size={24} />
            </div>
            <h3>Clean & Safe Environment</h3>
            <p>Hygienic facility with daily sanitization, clean locker rooms, rain showers, and filtered water.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          POPULAR PROGRAMS
          ======================================================== */}
      <section className="programs-section">
        <div className="section-title-wrap">
          <span className="section-eyebrow">OUR PROGRAMS</span>
          <h2>TRAINING FOR EVERY GOAL</h2>
          <p>Whether you want to build muscle, lose weight, or boost energy, we have a program for you.</p>
        </div>

        <div className="programs-grid">
          <div className="program-box">
            <div className="program-tag">Strength</div>
            <h3>Weightlifting & Hypertrophy</h3>
            <p>Build lean muscle, increase bone density, and develop raw functional strength with guided lifting routines.</p>
          </div>

          <div className="program-box">
            <div className="program-tag">Cardio</div>
            <h3>HIIT & Fat Burn</h3>
            <p>High-energy interval training designed to burn calories fast and improve cardiovascular endurance.</p>
          </div>

          <div className="program-box">
            <div className="program-tag">Flexibility</div>
            <h3>Yoga & Core Mobility</h3>
            <p>Improve flexibility, balance, posture, and core stability through guided mobility sessions.</p>
          </div>

          <div className="program-box">
            <div className="program-tag">Personal</div>
            <h3>1-on-1 Personal Training</h3>
            <p>Dedicated attention with customized workout routines and nutritional advice tailored to your body.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          MEMBERSHIP PLANS
          ======================================================== */}
      <section className="pricing-section" id="pricing">
        <div className="section-title-wrap">
          <span className="section-eyebrow">MEMBERSHIP PLANS</span>
          <h2>SIMPLE, AFFORDABLE PRICING</h2>
          <p>No hidden fees. Select the membership that matches your routine.</p>
        </div>

        <div className="pricing-cards-grid">
          {/* Plan 1 */}
          <div className="plan-card">
            <h3>Monthly Pass</h3>
            <p className="plan-desc">Great for getting started and trying out our gym.</p>
            <div className="plan-price">
              <span className="price-num">₹1,499</span>
              <span className="price-dur">/ month</span>
            </div>
            <ul className="plan-features">
              <li><CheckIcon size={16} /> Full gym floor access</li>
              <li><CheckIcon size={16} /> Locker and shower facilities</li>
              <li><CheckIcon size={16} /> Free WiFi and parking</li>
              <li><CheckIcon size={16} /> Initial fitness assessment</li>
            </ul>
            <Link to="/register" className="plan-btn">
              Choose Plan
            </Link>
          </div>

          {/* Plan 2: Highlighted */}
          <div className="plan-card plan-featured">
            <div className="popular-badge">MOST POPULAR</div>
            <h3>3 Months Plan</h3>
            <p className="plan-desc">Our most popular membership for steady physical progress.</p>
            <div className="plan-price">
              <span className="price-num">₹3,999</span>
              <span className="price-dur">/ 3 months</span>
            </div>
            <ul className="plan-features">
              <li><CheckIcon size={16} /> All Monthly Plan features</li>
              <li><CheckIcon size={16} /> Unlimited group fitness classes</li>
              <li><CheckIcon size={16} /> Sauna & steam room access</li>
              <li><CheckIcon size={16} /> Monthly body composition check</li>
              <li><CheckIcon size={16} /> 1 Free personal training session</li>
            </ul>
            <Link to="/register" className="plan-btn plan-btn-primary">
              Choose Plan
            </Link>
          </div>

          {/* Plan 3 */}
          <div className="plan-card">
            <h3>Annual Plan</h3>
            <p className="plan-desc">Best value for long-term health and commitment.</p>
            <div className="plan-price">
              <span className="price-num">₹11,999</span>
              <span className="price-dur">/ year</span>
            </div>
            <ul className="plan-features">
              <li><CheckIcon size={16} /> All 3-Month Plan features</li>
              <li><CheckIcon size={16} /> 4 Free guest passes per year</li>
              <li><CheckIcon size={16} /> Free gym kit and shaker bottle</li>
              <li><CheckIcon size={16} /> Free 60-day membership freeze</li>
              <li><CheckIcon size={16} /> Personalized diet plan guide</li>
            </ul>
            <Link to="/register" className="plan-btn">
              Choose Plan
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          TESTIMONIALS
          ======================================================== */}
      <section className="reviews-section">
        <div className="section-title-wrap">
          <span className="section-eyebrow">WHAT MEMBERS SAY</span>
          <h2>REAL PEOPLE, REAL RESULTS</h2>
        </div>

        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={16} fill="#ff9900" />
              ))}
            </div>
            <p className="review-text">
              "GymFit has completely changed my daily routine. The trainers are always there to help with form, and the equipment is top notch."
            </p>
            <div className="review-author">
              <strong>Amit Deshmukh</strong>
              <span>Member for 8 Months</span>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={16} fill="#ff9900" />
              ))}
            </div>
            <p className="review-text">
              "Best gym in Pune! Very clean, positive atmosphere and great weights section. Lost 9 kg in 4 months with their trainer's diet guidance."
            </p>
            <div className="review-author">
              <strong>Pooja Shinde</strong>
              <span>Member for 6 Months</span>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={16} fill="#ff9900" />
              ))}
            </div>
            <p className="review-text">
              "The timings are very convenient for working professionals. Open early till late night. Highly recommend the 3-month package."
            </p>
            <div className="review-author">
              <strong>Rohan Joshi</strong>
              <span>Member for 1 Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA BANNER
          ======================================================== */}
      <section className="cta-banner-section">
        <div className="cta-banner-box">
          <h2>READY TO GET FIT AND FEEL STRONGER?</h2>
          <p>Join GymFit today and start building the best version of yourself.</p>
          <div className="cta-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/register")}
            >
              Join GymFit Today
            </button>
            <Link to="/contact" className="cta-outline-link">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
