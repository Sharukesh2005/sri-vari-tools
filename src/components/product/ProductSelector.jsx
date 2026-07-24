import "./../../styles/ProductSelector.css";

function ProductSelector({
  product,
  selectedSeries,
  setSelectedSeries,
  selectedSize,
  setSelectedSize,
}) {
  const currentSeries = product.series[selectedSeries];

  const handleSeriesChange = (series) => {
    setSelectedSeries(series);

    const firstSize = Object.keys(product.series[series].sizes)[0];

    setSelectedSize(firstSize);
  };

  return (
    <div className="product-selector">

      <div className="selector-group">

        <h3>Select Series</h3>

        <div className="selector-buttons">

          {Object.entries(product.series).map(([key, value]) => (

            <button
              key={key}
              className={selectedSeries === key ? "active" : ""}
              onClick={() => handleSeriesChange(key)}
            >
              {value.title}
            </button>

          ))}

        </div>

      </div>

      <div className="selector-group">

        <h3>Select Size</h3>

        <div className="selector-buttons">

          {Object.keys(currentSeries.sizes).map((size) => (

            <button
              key={size}
              className={selectedSize === size ? "active" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ProductSelector;