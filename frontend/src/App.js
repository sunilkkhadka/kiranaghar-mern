import React from "react";
import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/product/:pid" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
