import React, { useContext } from "react";
import { CartWishContext } from "../context/CartWishContext";
import "./CartPage.css";

export const CartPage = () => {
  const { cartArray, setWishListArray } = useContext(CartWishContext);
  return (
    <>
      <div className="CartContainer">a</div>
    </>
  );
};
