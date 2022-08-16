import React from "react";

import "./productDisplay.scss";

import { useSelector } from "react-redux";

import ProductCard from "../productCard/ProductCard";

const ProductDisplay = () => {
  const productList = useSelector((state) => state.product.productItems);

  return (
    <>
      <div className="container">
        <div className="product-list">
          {productList.map((product) => (
            <ProductCard productItem={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
