import { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const { open, imageProfile } = useContext(ProductContext);
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  const splitLocation = pathname.split("/");

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
              <Link
                to="/metrics"
                className={
                  splitLocation[1] === "metrics"
                    ? "active metrics-nav"
                    : "metrics-nav"
                }
              >
                <span>Metrics</span>
              </Link>
              <Link
                to="/cart"
                className={
                  splitLocation[1] === "cart" ? "active cart-nav" : "cart-nav"
                }
              >
                <span>Cart</span>
              </Link>
              <Link
                to="/wishlist"
                className={
                  splitLocation[1] === "wishlist"
                    ? "active wishlist-nav"
                    : "wishlist-nav"
                }
              >
                <span>WishList</span>
              </Link>
            </>
          )}
          <Link
            to="/shop"
            className={
              splitLocation[1] === "shop" ? "active shop-nav" : "shop-nav"
            }
          >
            <span>Shop</span>
          </Link>
          <Link
            to="/login"
            className={
              splitLocation[1] === "login" ? "active login-nav" : "login-nav"
            }
          >
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
