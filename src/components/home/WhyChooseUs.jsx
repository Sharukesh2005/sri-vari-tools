import "../../styles/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section id="why" className="why">
      <h2>Why Choose Us</h2>

      <div className="cards">

        <div className="card">
          <h3>⭐</h3>
          <h4>High Quality Products</h4>
          <p>
            We manufacture premium-quality cutting tools for industrial
            applications.
          </p>
        </div>

        <div className="card">
          <h3>💰</h3>
          <h4>Affordable Pricing</h4>
          <p>
            Competitive pricing without compromising on quality.
          </p>
        </div>

        <div className="card">
          <h3>🚚</h3>
          <h4>Fast Delivery</h4>
          <p>
            Reliable and timely delivery to meet customer requirements.
          </p>
        </div>

        <div className="card">
          <h3>👨‍🔧</h3>
          <h4>Experienced Team</h4>
          <p>
            Skilled professionals with years of industry expertise.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;