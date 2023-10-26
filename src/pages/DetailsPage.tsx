import "./DetailsPage.css";
import { Link, Navigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useContext, useState } from "react";
import { numerator } from "../utils";
import { CartWishContext } from "../context/CartWishContext";
import { saveToLocalStorage } from "../utilsStorage";
import { Toaster, toast } from "sonner";

export const DetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const idnumb = parseInt(id!);
  console.log(idnumb);
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p.id === idnumb)!;
  const { wishListArray, cartArray, setWishListArray, setCartArray } =
    useContext(CartWishContext);
  const [photo, setPhoto] = useState<string>(product.images[0]);

  const addToWishlist = () => {
    const updatedWishArray = [...wishListArray];
    const foundProduct = products.find((a) => a.title === product.title);

    if (foundProduct) {
      updatedWishArray.push(foundProduct);
      setWishListArray(updatedWishArray);
    }

    saveToLocalStorage("wishList", updatedWishArray);
  };

  const addToCart = () => {
    const updatedCartArray = [...cartArray];
    const foundProduct = products.find((a) => a.title === product.title);

    if (foundProduct) {
      updatedCartArray.push(foundProduct);
      setCartArray(updatedCartArray);
    }

    saveToLocalStorage("cartList", updatedCartArray);
  };

  console.log(product);

  const session = localStorage.getItem("sessionData");

  return session === null ? (
    <Navigate to="/login" />
  ) : (
    <div className="principal-container">
      <Toaster />
      <Link to="/shop">
        <button className="buttonBack">Back</button>
      </Link>
      <div className="top">
        <h1 className="title">{product.title}</h1>
      </div>
      <div className="secondary-container">
        <div className="image-container">
          <img className="principal-image" src={photo} alt="" />
          <div className="secondary-image">
            {product.images.map((foto, index) => (
              <img
                key={index}
                src={foto}
                alt={`Imagen ${index}`}
                onClick={() => setPhoto(foto)}
              />
            ))}
          </div>
        </div>
        <div className="body-container">
          <h2>About:</h2>
          <div className="overflowContainer">
            <p>{product.description}</p>
            <div className="prices">
              <p>
                Price: ${numerator(product.price, product.discountPercentage)}{" "}
              </p>
              <p className="precioViejo">${product.price}</p>
            </div>
            <p>rating: {product.rating}/5</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
          </div>
          <div className="buttons-container">
            <button
              onClick={() => {
                addToWishlist();
                toast.success("Product added to Wishlist");
              }}
            >
              Wishlist
            </button>
            <button
              onClick={() => {
                addToCart();
                toast.success("Product added to Cart");
              }}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
