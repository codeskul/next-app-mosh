import React from "react";
import AddToCart from "../AddToCart";
import stlyles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={stlyles.card}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
