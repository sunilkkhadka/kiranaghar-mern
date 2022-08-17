import React from "react";
import { Link } from "react-router-dom";

import "./productCard.scss";

const ProductCard = ({ productItem }) => {
  return (
    <section className="product-card">
      <Link to={`/product/${productItem._id}`} className="product-card__image">
        <img
          src="https://sm.ign.com/ign_in/screenshot/default/chainsaw-man_fkbm.jpg"
          alt={productItem.title}
        />
      </Link>

      <Link to="/" className="product-card__title">
        {productItem.title}
      </Link>

      <p className="product-card__price">
        <span>Rs.</span>
        {productItem.price}
      </p>
      <button className="product-card__cart-btn">Add to cart</button>
    </section>
  );
};

export default ProductCard;
