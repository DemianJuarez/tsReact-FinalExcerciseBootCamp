import { useContext } from "react";
import { CartWishContext } from "../context/CartWishContext";
import "./CartPage.css";
import { Card } from "../components/Card";
import { saveToLocalStorage } from "../utilsStorage";
import { numerator } from "../utils";
import { Navigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

export const CartPage = () => {
  const { cartArray, setBoughtArray, setCartArray, boughtArray } =
    useContext(CartWishContext);

  const session = localStorage.getItem("sessionData");

  return session === null ? (
    <Navigate to="/login" />
  ) : (
    <div className="container">
      <Toaster />
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
                id={product.id}
              />
            </div>
          ))}
        </div>
        <div className="buttonContainer">
          <h3>
            Total Price:{" "}
            {cartArray
              .map((product) =>
                numerator(product.price, product.discountPercentage)
              )
              .reduce((acc, currentValue) => acc + currentValue, 0)
              .toFixed(2)}
          </h3>
          <button
            onClick={() => {
              const updatedBoughtArray = [...boughtArray, ...cartArray];
              setBoughtArray(updatedBoughtArray);
              toast.success("Products buyed");
              saveToLocalStorage("boughtList", updatedBoughtArray);
              setCartArray([]);
              localStorage.removeItem("cartList");
            }}
          >
            BUY
          </button>
        </div>
        T
      </div>
    </div>
  );
};
