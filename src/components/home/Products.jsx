import "../../styles/Products.css";
import { Link } from "react-router-dom";

import diamond from "../../assets/products/diamond.jpg";
import granite from "../../assets/products/granite.jpg";
import marble from "../../assets/products/marble.jpg";
import buffing from "../../assets/products/buffing.jpg";
import abrasives from "../../assets/products/abrasives.jpg";

const products = [
  {
    name: "Diamond Circular Saw Blades",
    description: "High-performance blades for precision cutting applications.",
    image: diamond,
    link: "/diamond-products",
  },
  {
    name: "Laser Welded Tuck Point Blades",
    description: "Designed for smooth and efficient cutting applications.",
    image: granite,
    link: "/laser-products",
  },
  {
    name: "Granite Polishing Buff",
    description: "Premium polishing buff for superior granite finishing.",
    image: marble,
    link: "/granite-polishing-buff",
  },
  {
    name: "Circular Saw Blade Segments",
    description: "Durable blade segments for industrial cutting solutions.",
    image: buffing,
    link: "/circular-saw-blade-segments",
  },
  {
    name: "Industrial Abrasives",
    description: "Reliable abrasive solutions for industrial use.",
    image: abrasives,
    link: "/industrial-abrasives",
  },
];

function Products() {
  return (
    <section id="products" className="products">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <Link to={product.link}>
              <button>View Products</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;