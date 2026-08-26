import "./Home.css";

function Home() {
    return (
        <main>

            <section className="hero">

                <div className="hero-content">

                    <p className="hero-small-title">
                        WELCOME TO GYMFIT
                    </p>

                    <h1>
                        TRANSFORM
                        <br />
                        YOUR BODY
                    </h1>

                    <p className="hero-description">
                        Push your limits. Build your strength.
                        Become the best version of yourself.
                    </p>

                    <div className="hero-buttons">

                        <button className="primary-btn">
                            Join Now
                        </button>

                        <button className="secondary-btn">
                            Explore More
                        </button>

                    </div>

                </div>

                <div className="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                        alt="Gym workout"
                    />
                </div>

            </section>

        </main>
    );
}

export default Home;