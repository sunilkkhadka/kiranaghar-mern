import React from "react";
import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
