import { Link } from "react-router-dom";
import { DumbbellIcon, TrophyIcon, ShieldIcon, ClockIcon } from "../component/Icons";
import "./about.css";

function About() {
  return (
    <main className="about-page">
      {/* Header */}
      <section className="about-header">
        <div className="about-header-content">
          <span className="about-tag">ABOUT GYMFIT</span>
          <h1>WE ARE HERE TO HELP YOU GET STRONGER.</h1>
          <p>
            Founded in Pune, GymFit was built with a simple mission: to provide a friendly, motivating, and fully equipped gym where everyday people can achieve extraordinary fitness results.
          </p>
        </div>
      </section>

      {/* Story & Values */}
      <section className="about-story-section">
        <div className="about-story-grid">
          <div className="story-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
              alt="GymFit Workout Area"
              className="about-story-photo"
            />
          </div>

          <div className="story-info">
            <span className="section-eyebrow">OUR STORY</span>
            <h2>MORE THAN JUST A WORKOUT SPACE</h2>
            <p>
              We know that joining a gym can feel intimidating. That's why at GymFit, we focus on creating a supportive atmosphere where beginners receive proper guidance and experienced lifters find competition-grade gear.
            </p>
            <p>
              Our trainers work closely with members to teach safe lifting mechanics, design practical meal guides, and celebrate every milestone along the way.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <DumbbellIcon size={20} className="text-orange" />
                <span>Modern imported equipment from leading brands</span>
              </div>
              <div className="highlight-item">
                <TrophyIcon size={20} className="text-orange" />
                <span>Certified personal trainers with proven client results</span>
              </div>
              <div className="highlight-item">
                <ShieldIcon size={20} className="text-orange" />
                <span>Clean, sanitized, and friendly community environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-strip">
        <div className="stats-container">
          <div className="stat-card">
            <h3>1,500+</h3>
            <p>Active Gym Members</p>
          </div>
          <div className="stat-card">
            <h3>20+</h3>
            <p>Certified Coaches</p>
          </div>
          <div className="stat-card">
            <h3>6 Years</h3>
            <p>Serving Pune Athletes</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Positive Feedback</p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities-section">
        <div className="section-title-wrap">
          <span className="section-eyebrow">FACILITIES</span>
          <h2>EXPLORE OUR GYM AREAS</h2>
          <p>Carefully maintained areas for strength, cardio, and recovery.</p>
        </div>

        <div className="facilities-grid">
          <div className="facility-item">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
              alt="Weights Section"
            />
            <h4>Free Weights & Dumbbells</h4>
            <p>Dumbbells up to 50 kg, power racks, bench presses, and deadlift platforms.</p>
          </div>

          <div className="facility-item">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
              alt="Cardio Section"
            />
            <h4>Cardio & Treadmills</h4>
            <p>Treadmills, cross trainers, rowers, and assault spin bikes.</p>
          </div>

          <div className="facility-item">
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80"
              alt="Steam and Sauna"
            />
            <h4>Steam Room & Showers</h4>
            <p>Hot showers, changing rooms, and relaxing steam bath for post-workout recovery.</p>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>WANT TO VISIT OUR GYM FIRST?</h2>
          <p>Drop by our FC Road branch in Pune for a quick tour and free fitness assessment.</p>
          <div className="about-cta-buttons">
            <Link to="/contact" className="btn-primary">
              Contact & Visit Us
            </Link>
            <Link to="/register" className="btn-secondary">
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;