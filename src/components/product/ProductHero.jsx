import "../../styles/ProductHero.css";

function ProductHero({
  title,
  tagline,
  description,
  image,
  breadcrumb,
}) {
  return (
    <section
      className="product-hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(8,20,38,0.78),
          rgba(8,20,38,0.72)
        ), url(${image})`,
      }}
    >
      <div className="product-hero-container">

        <div className="product-breadcrumb">
          {breadcrumb}
        </div>

        <div className="hero-content">

          <span className="hero-tagline">
            {tagline}
          </span>

          <h1>{title}</h1>

          <p>
            {description}
          </p>

        </div>

      </div>
    </section>
  );
}

export default ProductHero;