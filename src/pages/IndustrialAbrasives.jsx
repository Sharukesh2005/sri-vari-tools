import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../data/products";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EnquiryModal from "../components/common/EnquiryModal";

import "../styles/DiamondProducts.css";

function IndustrialAbrasives() {
  const product = products.industrialAbrasives;

  const [selectedGrit, setSelectedGrit] = useState("24");
  const [showModal, setShowModal] = useState(false);

  const currentSpec = product.specifications[selectedGrit];
  const grits = Object.keys(product.specifications);

  return (
    <>
      <Navbar />

      <div className="diamond-page">

        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt;{" "}
          <Link to="/">Products</Link> &gt;{" "}
          <span>{product.name}</span>
        </div>

        <Link to="/" className="back-btn">
          ← Back to Products
        </Link>

        <h1 className="page-title">{product.name}</h1>

        <div className="product-container">

          <img
            src={currentSpec.image}
            alt={`${product.name} - ${selectedGrit}`}
            className="product-img"
          />

          <div className="product-content">

            <h2>Product Overview</h2>

            <p>{product.description}</p>

            <h3>Key Features</h3>

            <ul>
              <li>✔ High Performance Grinding</li>
              <li>✔ Long Service Life</li>
              <li>✔ Uniform Surface Finish</li>
              <li>✔ Excellent Wear Resistance</li>
              <li>✔ Suitable for Granite, Marble & Stone</li>
            </ul>

            <h3>Available Grit Sizes</h3>

            <div className="size-buttons">
              {grits.map((grit) => (
                <button
                  key={grit}
                  onClick={() => setSelectedGrit(grit)}
                  className={selectedGrit === grit ? "active" : ""}
                >
                  {grit}
                </button>
              ))}
            </div>

            <div className="specification-box">

              <h3>Product Specifications</h3>

              <table className="spec-table">
                <tbody>

                  <tr>
                    <td><strong>Selected Grit</strong></td>
                    <td>{selectedGrit}</td>
                  </tr>

                  <tr>
                    <td><strong>Grit Size</strong></td>
                    <td>{currentSpec.grit}</td>
                  </tr>

                  <tr>
                    <td><strong>Diameter</strong></td>
                    <td>{currentSpec.diameter}</td>
                  </tr>

                  <tr>
                    <td><strong>Thickness</strong></td>
                    <td>{currentSpec.thickness}</td>
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
          selectedSize={`Grit ${selectedGrit}`}
        />

      </div>

      <Footer />
    </>
  );
}

export default IndustrialAbrasives;