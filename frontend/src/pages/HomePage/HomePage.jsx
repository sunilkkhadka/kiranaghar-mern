import React from "react";

// Importing libraries
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Importing components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Category from "../../components/category/Category.jsx";
import ProductDisplay from "../../components/productDisplay/ProductDisplay.jsx";

// Importing slice async functions
import { fetchAllProducts } from "../../features/productSlice.jsx";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <section className="homepage">
      <Category />
      <Slider />
      <ProductDisplay />
    </section>
  );
};

export default HomePage;
