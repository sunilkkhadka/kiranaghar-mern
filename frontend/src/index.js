import App from "./App";
import React from "react";
import "./scss/index.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Importing redux toolkit store and provider
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// Importing slice reducers
import cartReducer from "./features/cartSlice.jsx";
import userReducer from "./features/userSlice.jsx";
import productReducer from "./features/productSlice.jsx";

// Setting up store
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
