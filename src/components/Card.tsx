import "./Card.css";
import { Button } from "./Button";
import { useContext } from "react";
import { CartWishContext } from "../context/CartWishContext";
import { ProductContext } from "../context/ProductContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { saveToLocalStorage } from "../utilsStorage";
import { Toaster, toast } from "sonner";

export type CardProps = {
  rating: number;
  productImages: string[];
  title: string;
  description: string;
  discountedPrice: number;
  price: number;
  brand: string;
  thumbnail: string;
  category: string;
  id: number;
  discountPercentage: number;
  stock: number;
};

function Card(props: CardProps) {
  const { products } = useContext(ProductContext);
  const {
    rating,
    productImages,
    title,
    discountedPrice,
    price,
    brand,
    category,
    thumbnail,
    description,
    stock,
    id,
  } = props;
  const { wishListArray, cartArray, setWishListArray, setCartArray } =
    useContext(CartWishContext);

  const location = useLocation();
  const { pathname } = location;

  const addToWishlist = () => {
    const updatedWishArray = [...wishListArray];
    const foundProduct = products.find((product) => product.title === title);

    if (foundProduct) {
      updatedWishArray.push(foundProduct);
      setWishListArray(updatedWishArray);
    }

    saveToLocalStorage("wishList", updatedWishArray);
  };

  const addToCart = () => {
    const updatedCartArray = [...cartArray];
    const foundProduct = products.find((product) => product.title === title);

    if (foundProduct) {
      updatedCartArray.push(foundProduct);
      setCartArray(updatedCartArray);
    }

    saveToLocalStorage("cartList", updatedCartArray);
  };

  const navigate = useNavigate();

  const session = localStorage.getItem("sessionData");

  return (
    <div className="card">
      <Toaster />
      <div className="product-image-div">
        <p className="product-rating">{rating}/5</p>
        <div className="product-image">
          <img src={productImages[0]} alt="" className="image" />
        </div>
      </div>
      <div className="product-description">
        <Link className="product-name" to={`/product/${id}`}>
          <p className="product-name">Name: {title}</p>
        </Link>
        <p className="product-price">Price: {price}</p>
        <p className="product-stock">Stock: {stock}</p>
      </div>
      <div className="buttons-div">
        {pathname === "/shop" && (
          <>
            <Button
              text="Whishlist"
              onClick={() => {
                if (session) {
                  addToWishlist();
                  toast.success("Product added to WishList");
                } else {
                  navigate("/login");
                }
              }}
            />

            <Button
              text="Cart"
              onClick={() => {
                if (session) {
                  addToCart();
                  toast.success("Product added to Cart");
                } else {
                  navigate("/login");
                }
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export { Card };
