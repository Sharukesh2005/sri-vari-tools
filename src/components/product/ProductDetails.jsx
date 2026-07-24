import { useState } from "react";

import ProductOverview from "./ProductOverview";
import ProductSelector from "./ProductSelector";
import ProductSpecs from "./ProductSpecs";
import ProductCTA from "./ProductCTA";

import "../../styles/ProductDetails.css";

function ProductDetails({ product }) {

  const firstSeries = Object.keys(product.series)[0];

  const firstSize = Object.keys(
    product.series[firstSeries].sizes
  )[0];

  const [selectedSeries, setSelectedSeries] = useState(firstSeries);

  const [selectedSize, setSelectedSize] = useState(firstSize);

  const currentSeries = product.series[selectedSeries];

  const currentSpec = currentSeries.sizes[selectedSize];

  return (

    <div className="product-details">

      <div className="product-left">

        <div className="image-card">

          <img
            src={currentSpec.image}
            alt={selectedSize}
            className="detail-image"
          />

        </div>

      </div>

      <div className="product-right">

        <ProductOverview product={product} />

        <ProductSelector
          product={product}
          selectedSeries={selectedSeries}
          setSelectedSeries={setSelectedSeries}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <ProductSpecs
          specification={currentSpec}
        />

        <ProductCTA
          product={product}
          selectedSeries={currentSeries.title}
          selectedSize={selectedSize}
        />

      </div>

    </div>

  );

}

export default ProductDetails;