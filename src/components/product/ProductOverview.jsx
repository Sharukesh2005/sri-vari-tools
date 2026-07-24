import "../../styles/ProductOverview.css";

function ProductOverview({ product }) {
  return (
    <section className="product-overview">

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <div className="overview-features">

        <div className="feature-card">
          <span>✔</span>
          <p>Premium Quality</p>
        </div>

        <div className="feature-card">
          <span>✔</span>
          <p>Industrial Grade</p>
        </div>

        <div className="feature-card">
          <span>✔</span>
          <p>High Performance</p>
        </div>

        <div className="feature-card">
          <span>✔</span>
          <p>Long Service Life</p>
        </div>

      </div>

    </section>
  );
}

export default ProductOverview;