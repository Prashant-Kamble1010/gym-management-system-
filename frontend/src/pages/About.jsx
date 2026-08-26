import "./about.css";

function About() {
    return (
        <main className="about-page">

            {/* Hero Section */}
            <section className="about-hero">

                <p className="about-label">
                    WHO WE ARE
                </p>

                <h1>
                    ABOUT <span>GYMFIT</span>
                </h1>

                <p className="about-intro">
                    We believe fitness is not just about looking good.
                    It's about becoming stronger, healthier and more confident
                    every single day.
                </p>

            </section>


            {/* Our Story */}
            <section className="about-story">

                <div className="story-image">
                    <img
                        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
                        alt="GYMFIT gym"
                    />
                </div>

                <div className="story-content">

                    <p className="about-label">
                        OUR STORY
                    </p>

                    <h2>
                        MORE THAN JUST A GYM
                    </h2>

                    <p>
                        GYMFIT was created with one simple goal — to create
                        a place where people can become the strongest version
                        of themselves.
                    </p>

                    <p>
                        From beginners taking their first step into fitness
                        to experienced athletes pushing their limits, our gym
                        provides the environment, equipment and support needed
                        to achieve your goals.
                    </p>

                    <p>
                        Our experienced trainers and modern facilities make
                        GYMFIT a place where hard work meets motivation.
                    </p>

                </div>

            </section>


            {/* Statistics */}
            <section className="stats-section">

                <div className="stat-card">
                    <h3>500+</h3>
                    <p>Active Members</p>
                </div>

                <div className="stat-card">
                    <h3>10+</h3>
                    <p>Expert Trainers</p>
                </div>

                <div className="stat-card">
                    <h3>5+</h3>
                    <p>Years Experience</p>
                </div>

                <div className="stat-card">
                    <h3>20+</h3>
                    <p>Training Programs</p>
                </div>

            </section>

        </main>
    );
}

export default About;