import React from "react";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { useSearchParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import { getCartItems } from "../../features/cartSlice";

const CartPage = () => {
  const [qtySearchParams, setQtySearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { pid } = useParams();
  const quantity = qtySearchParams.get("qty");

  useEffect(() => {
    getCartItems(pid, quantity);
  }, [dispatch, pid, quantity]);

  return <section className="cart-page"></section>;
};

export default CartPage;
