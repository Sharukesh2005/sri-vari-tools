import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import products from "../data/products";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EnquiryModal from "../components/common/EnquiryModal";

import "../styles/DiamondProducts.css";

function CircularSawBladeSegments() {
  const product = products.circularSawBladeSegments;

  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("24 mm");
  const [showModal, setShowModal] = useState(false);

  const currentSpec = product.specifications[selectedSize];
  const sizes = Object.keys(product.specifications);

  return (
    <>
      <Navbar />

      <div className="diamond-page">

        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt;{" "}
          <Link to="/">Products</Link> &gt;{" "}
          <span>{product.name}</span>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back to Products
        </button>

        <h1 className="page-title">{product.name}</h1>

        <div className="product-container">

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
              <li>✔ Premium Diamond Quality</li>
              <li>✔ Fast & Smooth Cutting</li>
              <li>✔ Long Service Life</li>
              <li>✔ High Wear Resistance</li>
              <li>✔ Suitable for Granite & Marble</li>
            </ul>

            <h3>Available Segment Sizes</h3>

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
                    <td><strong>Length</strong></td>
                    <td>{currentSpec.length}</td>
                  </tr>

                  <tr>
                    <td><strong>Width</strong></td>
                    <td>{currentSpec.width}</td>
                  </tr>

                  <tr>
                    <td><strong>Height</strong></td>
                    <td>{currentSpec.height}</td>
                  </tr>

                  <tr>
                    <td><strong>Application</strong></td>
                    <td>{currentSpec.application}</td>
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

export default CircularSawBladeSegments;