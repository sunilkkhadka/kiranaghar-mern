import React from "react";

// Importing libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Importing components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Category from "../../components/category/Category.jsx";

// Importing slice async functions
import { fetchAllProducts } from "../../features/productSlice.jsx";

const HomePage = () => {
  const dispatch = useDispatch();
  const showProducts = useSelector((state) => state.product.productItems);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(showProducts);

  return (
    <section className="homepage">
      <Header />
      <Category />
      <Slider />
      <Footer />
    </section>
  );
};

export default HomePage;
