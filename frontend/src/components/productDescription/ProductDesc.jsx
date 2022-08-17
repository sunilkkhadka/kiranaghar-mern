import React from "react";
import "./productDesc.scss";

const ProductDesc = ({ product }) => {
  return (
    <>
      <div className="container">
        <section className="product-desc">
          <p className="product-desc__title">Description:</p>
          <p className="product-desc__content">{product.description}</p>
        </section>
      </div>
    </>
  );
};

export default ProductDesc;
