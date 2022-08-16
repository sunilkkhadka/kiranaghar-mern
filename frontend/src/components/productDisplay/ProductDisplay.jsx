import React from "react";

import ProductCard from "../productCard/ProductCard";

const ProductDisplay = () => {
  return (
    <section className="product-list-section">
      <div className="container">
        Product list
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductDisplay;
