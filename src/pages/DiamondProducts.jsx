import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../data/products";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EnquiryModal from "../components/common/EnquiryModal";

import "../styles/DiamondProducts.css";

function DiamondProducts() {
  const product = products.diamondCircularSawBlades;

  const [selectedSize, setSelectedSize] = useState('10"');
  const [showModal, setShowModal] = useState(false);

  const currentSpec = product.specifications[selectedSize];
  const sizes = Object.keys(product.specifications);

  return (
    <>
      <Navbar />

      <div className="diamond-page">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt;{" "}
          <Link to="/">Products</Link> &gt;{" "}
          <span>{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/" className="back-btn">
          ← Back to Products
        </Link>

        {/* Page Title */}
        <h1 className="page-title">{product.name}</h1>

        <div className="product-container">

          {/* Product Image */}
          <img
            src={currentSpec.image}
            alt={`${product.name} - ${selectedSize}`}
            className="product-img"
          />

          <div className="product-content">

            <h2>Product Overview</h2>

            <p>{product.description}</p>

            <h3>Key Features</h3>

            <ul>
              <li>✔ High Cutting Performance</li>
              <li>✔ Premium Diamond Segments</li>
              <li>✔ Long Service Life</li>
              <li>✔ Smooth & Accurate Cutting</li>
              <li>✔ Industrial Grade Quality</li>
            </ul>

            <h3>Available Sizes</h3>

            <div className="size-buttons">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? "active" : ""}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="specification-box">

              <h3>Product Specifications</h3>

              <table className="spec-table">
                <tbody>

                  <tr>
                    <td><strong>Selected Size</strong></td>
                    <td>{selectedSize}</td>
                  </tr>

                  <tr>
                    <td><strong>Outer Diameter</strong></td>
                    <td>{currentSpec.outerDiameter}</td>
                  </tr>

                  <tr>
                    <td><strong>Inner Diameter</strong></td>
                    <td>{currentSpec.innerDiameter}</td>
                  </tr>

                  <tr>
                    <td><strong>Segment Width</strong></td>
                    <td>{currentSpec.segmentWidth}</td>
                  </tr>

                  <tr>
                    <td><strong>Segment Thickness</strong></td>
                    <td>{currentSpec.segmentThickness}</td>
                  </tr>

                  <tr>
                    <td><strong>Segment Height</strong></td>
                    <td>{currentSpec.segmentHeight}</td>
                  </tr>

                  <tr>
                    <td><strong>Number of Segments</strong></td>
                    <td>{currentSpec.segments}</td>
                  </tr>

                  <tr>
                    <td><strong>Core Thickness</strong></td>
                    <td>{currentSpec.coreThickness}</td>
                  </tr>

                </tbody>
              </table>

            </div>

            <button
              className="enquiry-btn"
              onClick={() => setShowModal(true)}
            >
              Enquire Now
            </button>

          </div>

        </div>

        <EnquiryModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          productName={product.name}
          selectedSize={selectedSize}
        />

      </div>

      <Footer />
    </>
  );
}

export default DiamondProducts;