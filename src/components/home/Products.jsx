import "../../styles/Products.css";
import { Link } from "react-router-dom";

// Product Images
import diamond from "../../assets/products/diamond/supreme/10 inch.jpg";
import laser from "../../assets/products/laser/cover.jpg";
import polishingBuff from "../../assets/products/polishing-buff/cover.jpg";
import segments from "../../assets/products/segments/cover.jpg";
import smallBlades from "../../assets/products/small-blades/4-inch granite1.jpg";

const products = [
  {
    name: "Diamond Circular Saw Blades",
    description:
      "Premium quality diamond blades engineered for precise cutting of granite, marble and stone.",
    image: diamond,
    link: "/diamond-products",
  },
  {
    name: "Laser Welded Tuck Point Blades",
    description:
      "Industrial laser welded blades designed for superior strength and cutting efficiency.",
    image: laser,
    link: "/laser-products",
  },
  {
    name: "Granite Polishing Buff",
    description:
      "Professional polishing buff for achieving smooth and glossy granite finishes.",
    image: polishingBuff,
    link: "/granite-polishing-buff",
  },
  {
    name: "Circular Saw Blade Segments",
    description:
      "High-performance diamond segments for heavy-duty industrial cutting applications.",
    image: segments,
    link: "/circular-saw-blade-segments",
  },
  {
    name: "Small Blades",
    description:
      "Compact diamond blades specially designed for cutting granite, ceramic and tile applications.",
    image: smallBlades,

    // Change this to "/small-blades" after we create that page.
    link: "/industrial-abrasives",
  },
];

function Products() {
  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="section-heading">
          <span>OUR PRODUCTS</span>

          <h2>Industrial Diamond Tools</h2>

          <p>
            Sri Vari Tools manufactures premium-quality industrial cutting,
            polishing and finishing tools trusted by professionals across
            multiple industries.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <div className="product-content">
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <Link to={product.link}>
                  <button>View Product</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;