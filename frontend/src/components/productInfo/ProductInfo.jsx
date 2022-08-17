import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./productInfo.scss";

const ProductInfo = ({ product }) => {
  const [qty, setQty] = useState(0);

  return (
    <section className="product-info">
      <div className="container">
        <div className="product-info__content">
          <div className="product-info__left">
            <div className="product-info__image">
              <img
                src="https://sm.ign.com/ign_in/screenshot/default/chainsaw-man_fkbm.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="product-info__middle">
            <div className="product-info__specs">
              <p className="product-info__title">{product.title}</p>
              <p className="product-info__brand">Brand: {product.brand}</p>
              <div className="product-info__rating">
                Rating: {product.rating}
              </div>
            </div>
            <div className="product-info__price-quantity">
              <p className="product-info__price">
                {" "}
                <span>Rs.</span>
                {product.price}
              </p>
              <div className="product-info__quantity">
                <p>Quantity:</p>
                <button
                  className="product-info__quantity-add qty-btn"
                  onClick={(e) => {
                    setQty(qty + 1);
                  }}
                >
                  +
                </button>
                <div className="product-info__quantity-num">{qty}</div>
                <button
                  className="product-info__quantity-subtract qty-btn"
                  onClick={(e) => {
                    setQty(qty - 1);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="product-info__actions">
              <Link to="/" className="product-info__add-to-cart">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
