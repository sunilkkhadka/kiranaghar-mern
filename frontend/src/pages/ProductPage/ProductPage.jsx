import React from "react";
import "./productPage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductDesc from "../../components/productDescription/ProductDesc";
import ProductInfo from "../../components/productInfo/ProductInfo";
import ProductDisplay from "../../components/productDisplay/ProductDisplay";
import { fetchAllProducts } from "../../features/productSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { pid } = useParams();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.product.productItems);
  const productById = productList.find((product) => product._id === pid);

  return (
    <section className="product-page">
      <Header />
      <div className="product-page__breadcrumb container">
        <div className="container">
          <p>
            Home &nbsp; &gt; &nbsp; Products &nbsp; &gt; &nbsp;
            {productById.title}
          </p>
        </div>
      </div>
      <ProductInfo product={productById} />
      <ProductDesc product={productById} />
      <div className="product-page__recommendation">
        <p className="container">You may also like: </p>
        <ProductDisplay />
      </div>
      <Footer />
    </section>
  );
};

export default ProductPage;
