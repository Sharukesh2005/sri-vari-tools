import "../../styles/Hero.css";
import heroImage from "../../assets/hero.png";

function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");

    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Precision Engineered.</h1>

        <h2>Performance Guaranteed.</h2>

        <p>
          Manufacturing and supplying high-quality cutting tools for
          industrial applications.
        </p>

        <div className="hero-buttons">
          <button onClick={scrollToProducts}>
            Explore Products
          </button>

          <a href="#contact" className="contact-btn">
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={heroImage}
          alt="Hero"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;