import React from "react";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Category from "../../components/category/Category.jsx";

const HomePage = () => {
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
