import { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useLocation } from "react-router-dom";
import { DropdownMenu } from "./DropdownMenu.tsx";
import { ShopPage } from "../pages/ShopPage.tsx";



const options: Option[] = [
  { value: '/metrics', label: 'Metrics' },
  { value: '/cart', label: 'Cart' },
  { value: '/wishlist', label: 'WishList' },
  { value: '/shop', label: 'Shop' }
];



export const NavBar = () => {
  var session = localStorage.getItem("sessionData");

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
          <Link to="/shop" className="title-nav">
            <h2>The best ecommerce ever</h2>
          </Link>
        </div>
        <div className="right-side-nav">
          {session && (
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
      <nav className="nav-container-responsive">
        <Link to="/" className="gm2-nav-responsive">
          <div className="left-side-nav-responsive">
            <img className="image-gm2-nav-responsive" src="https://assets-global.website-files.com/640b80e04481e4775cf8acf3/640f86525f5dd28fe68b82b9_GM2%20logo%20White-%20Small.svg" />
          </div>
        </Link>
        <div className="right-side-nav-responsive">
          <div className="dropdown">
            <DropdownMenu options={options} />
          </div>
        </div>

      </nav>
    </>
  );
};
