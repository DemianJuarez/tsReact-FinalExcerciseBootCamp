import React from "react";
import "./DetailsPage.css";
import { Navigate } from "react-router-dom";

export const DetailsPage = () => {
  const session = localStorage.getItem("sessionData");

  return session === null ? (
    <Navigate to="/login" />
  ) : (
    <div className="principal-container">
      <h1>Product Detail</h1>
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
          <h2>Title</h2>
          <p>Price con el descuento</p>
          <p>ratting/5</p>
          <p>Category:</p>
          <p>Stock:</p>
          <div className="buttons-container">
            <button>Wishlist</button>
            <button>Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
