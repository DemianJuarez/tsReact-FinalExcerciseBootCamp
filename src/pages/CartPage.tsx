import { useContext } from "react";
import { CartWishContext } from "../context/CartWishContext";
import "./CartPage.css";
import { Card } from "../components/Card";
import { saveToLocalStorage } from "../utilsStorage";
import { numerator } from "../utils";
import { Navigate } from "react-router-dom";

export const CartPage = () => {
  const { cartArray, setBoughtArray, setCartArray, boughtArray } =
    useContext(CartWishContext);

  const session = localStorage.getItem("sessionData");

  return session === null ? (
    <Navigate to="/login" />
  ) : (
    <div className="container">
      <div className="CartPageContainer">
        <h1>Cart</h1>
        <div className="cartContainer">
          {cartArray.map((product, index) => (
            <div className={`${product.title}`} key={index}>
              <Card
                rating={product.rating}
                productImages={product.images}
                name={product.title}
                price={numerator(product.price, product.discountPercentage)}
                discountPercentage={product.discountPercentage}
                stock={product.stock}
              />
            </div>
          ))}
        </div>
        <div className="buttonContainer">
          <button
            onClick={() => {
              const updatedBoughtArray = [...boughtArray, ...cartArray];
              setBoughtArray(updatedBoughtArray);
              saveToLocalStorage("boughtList", updatedBoughtArray);

              setCartArray([]);
              localStorage.removeItem("cartList");
            }}
          >
            BUY
          </button>
        </div>
      </div>
    </div>
  );
};
