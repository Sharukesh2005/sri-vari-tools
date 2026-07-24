import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ProductHero from "../components/product/ProductHero";
import ProductDetails from "../components/product/ProductDetails";

import products from "../data/products.js";

import "../styles/DiamondProducts.css";

function DiamondProducts() {
  const product = products.diamondCircularSawBlades;

  return (
    <>
      <Navbar />

      <ProductHero
        title={product.name}
        tagline="Premium Industrial Cutting Solutions"
        description={product.description}
        image={product.heroImage}
        breadcrumb={
          <>
            <Link to="/">Home</Link>
            &nbsp;/&nbsp;
            <Link to="/products">Products</Link>
            &nbsp;/&nbsp;
            {product.name}
          </>
        }
      />

      <section className="diamond-page">
        <ProductDetails product={product} />
      </section>

      <Footer />
    </>
  );
}

export default DiamondProducts;