import "../../styles/ProductSpecs.css";

function ProductSpecs({ specification }) {
  const specs = Object.entries(specification).filter(
    ([key]) => key !== "image"
  );

  return (
    <section className="product-specs">

      <h2>Technical Specifications</h2>

      <div className="spec-grid">

        {specs.map(([key, value]) => (

          <div className="spec-card" key={key}>

            <h4>
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (c) => c.toUpperCase())}
            </h4>

            <p>{value}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProductSpecs;