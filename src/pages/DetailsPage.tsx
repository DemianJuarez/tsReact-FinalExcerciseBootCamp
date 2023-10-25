import "./DetailsPage.css";
import { Navigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { numerator } from "../utils";

export const DetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const idnumb = parseInt(id!);
  console.log(idnumb);
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id === idnumb)!;
  console.log(product);

  const session = localStorage.getItem("sessionData");

  return session === null ? (
    <Navigate to="/login" />
  ) : (
    <div className="principal-container">
      <h1>{product.title}</h1>
      <div className="secondary-container">
        <div className="image-container">
          <img
            className="principal-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwWldr5nCZ7SfWmTtovSpHrZStZut8eq3XwzCCfF6W3A-ZYl2F7EteqDADPvkoxSs3ls&usqp=CAU"
            alt=""
          />
          <div className="secondary-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwWldr5nCZ7SfWmTtovSpHrZStZut8eq3XwzCCfF6W3A-ZYl2F7EteqDADPvkoxSs3ls&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwWldr5nCZ7SfWmTtovSpHrZStZut8eq3XwzCCfF6W3A-ZYl2F7EteqDADPvkoxSs3ls&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwWldr5nCZ7SfWmTtovSpHrZStZut8eq3XwzCCfF6W3A-ZYl2F7EteqDADPvkoxSs3ls&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <div className="body-container">
          <h2>About:</h2>
          <p>{product.description}</p>
          <p>
            Price: {numerator(product.price, product.discountPercentage)}{" "}
            {product.price}
          </p>
          <p>rating: {product.rating}/5</p>
          <p>Category: {product.category}</p>
          <p>Stock: {product.stock}</p>
        </div>
        <div className="buttons-container">
          <button>Wishlist</button>
          <button>Add Cart</button>
        </div>
      </div>
    </div>
  );
};
