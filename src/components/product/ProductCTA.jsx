import { useState } from "react";

import EnquiryModal from "../common/EnquiryModal";

import "../../styles/ProductCTA.css";

function ProductCTA({
  product,
  selectedSeries,
  selectedSize,
}) {

  const [open,setOpen]=useState(false);

  return(

    <>

      <div className="product-cta">

        <button
          className="cta-button"
          onClick={()=>setOpen(true)}
        >
          Enquire Now
        </button>

      </div>

      <EnquiryModal
        isOpen={open}
        onClose={()=>setOpen(false)}
        productName={`${product.name} - ${selectedSeries}`}
        selectedSize={selectedSize}
      />

    </>

  );

}

export default ProductCTA;