import { useContext } from "react";
import { Filter } from "../components/Filter";
import { CartWishContext } from "../context/CartWishContext";
import { ProductContext } from "../context/ProductContext";
import "./WishListPage.css";
import { ShopContext } from "../context/ShopContext";
import { saveToLocalStorage } from "../utilsStorage";
import { numerator } from "../utils";
import { Navigate } from "react-router-dom";

export const WishListPage = () => {
  const { wishListArray, cartArray, setCartArray, setWishListArray } =
    useContext(CartWishContext);

  const { products } = useContext(ProductContext);
  const { filter, min, max, input } = useContext(ShopContext);

  const deleteProduct = (productId: number) => {
    const productIndex = wishListArray.findIndex(
      (product) => product.id === productId
    );
    if (productIndex !== -1) {
      const updatedWishList = [...wishListArray];
      updatedWishList.splice(productIndex, 1);
      setWishListArray(updatedWishList);
    }
  };

  const addToCart = (id: number) => {
    const foundProduct = products.find((product) => product.id === id);

    if (foundProduct) {
      const updatedCartArray = [...cartArray, foundProduct];
      setCartArray(updatedCartArray);

      const wishProductIndex = wishListArray.findIndex(
        (product) => product.id === id
      );

      if (wishProductIndex !== -1) {
        const updatedWishArray = [...wishListArray];
        updatedWishArray.splice(wishProductIndex, 1);
        setWishListArray(updatedWishArray);
        saveToLocalStorage("wishList", updatedWishArray);
      }
    }
  };

  const session = localStorage.getItem("sessionData");

  return session === null ? (
    <Navigate to="/login" />
  ) : (
    <div className="WishListContainer">
      <div className="filter">
        <Filter />
      </div>
      <div className="tableContainer">
        <div className="table">
          <div className="rowHeader">
            <div className="cell1">Category</div>
            <div className="cell2">Name</div>
            <div className="cell3">Brand</div>
            <div className="cell4">Price</div>
            {/* <div className="cell5">Images</div> */}
            <div className="cell6">Actions</div>
          </div>
          <div className="productContainer">
            {wishListArray
              .filter((e) => filter === "all" || e.category === filter)
              .filter((e) => e.price >= min && e.price <= max)
              .filter(
                (e) =>
                  e.title.toLowerCase().includes(input.toLowerCase()) ||
                  e.brand.toLowerCase().includes(input.toLowerCase()) ||
                  e.description.toLowerCase().includes(input.toLowerCase())
              )
              .map((product, index) => (
                <div className="row" key={index}>
                  <div className="cell1">{product.category}</div>
                  <div className="cell2">{product.title}</div>
                  <div className="cell3">{product.brand}</div>
                  <div className="cell4">
                    {numerator(product.price, product.discountPercentage)}
                  </div>
                  {/* <div className="cell5 cellImagenes">
                    {product.images.map((image, index) => (
                      <a
                        key={image}
                        href={image}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link_to_image_{index + 1}
                      </a>
                    ))}
                  </div> */}
                  <div className="cell6 actions">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="deleteButton"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        addToCart(product.id);
                      }}
                      className="cartButton"
                    >
                      Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
