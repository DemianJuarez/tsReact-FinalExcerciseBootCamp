import { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
export const NavBar = () => {
  const { open, imageProfile } = useContext(ProductContext);
  return (
    <>
      <nav className="nav-container">
        <div className="left-side-nav">
          <Link to="/" className="gm2-nav">
            <img className="image-gm2-nav" src="gm2-image.png" />
          </Link>
          <Link to="/" className="title-nav">
            <h2>The best ecommerce ever</h2>
          </Link>
        </div>
        <div className="right-side-nav">
          {open && (
            <>
              <Link to="/metrics" className="metrics-nav">
                <span>Metrics</span>
              </Link>
              <Link to="/cart" className="cart-nav">
                <span>Cart</span>
              </Link>
              <Link to="/wishList" className="wishlist-nav">
                <span>WishList</span>
              </Link>
            </>
          )}
          <Link to="/shop" className="shop-nav">
            <span>Shop</span>
          </Link>
          <Link to="/login" className="login-nav">
            <img
              className="image-profile-nav"
              src={imageProfile !== "" ? imageProfile : "default-profile.svg"}
            />
          </Link>
        </div>
      </nav>
    </>
  );
};
