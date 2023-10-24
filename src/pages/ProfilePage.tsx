import "./ProfilePage.css";
import { useEffect, useState, useContext } from "react";
import { CartWishContext } from "../context/CartWishContext";

  
export const ProfilePage = () => {

  const { boughtArray } = useContext(CartWishContext);

  const [userData, setUserData] = useState<{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    image: string;
  } | null>(null);


  useEffect(() => {
    const sessionData = localStorage.getItem('sessionData');
    if (sessionData) {
      const userData = JSON.parse(sessionData);
      setUserData(userData);
    }
  }, []);

  const handlelogout = () => {
    localStorage.removeItem("sessionData");
    window.location.href = "/login";


  }

  return (
    <section className="profile-container">
      <div className="megadiv">
        <div className="user-profile-image">
          <img
            src= {userData?.image}
            alt="user image profile"
          />
        </div>
        <div className="user-name-div">
          <p className="user-name">{userData?.username}</p>
        </div>
        <div className="personal-info-div">
          <div className="default-text">
            <p className="full-name-text">Full Name</p>
            <p className="email-text">Email</p>
            <p className="phone-text">Phone</p>
            <p className="address-text">Address</p>
          </div>
          <div className="personal-info">
            <div className="full-name">
              <p className="firstname">{userData?.firstName}</p>
              <p className="lastname">{userData?.lastName}</p>
            </div>
            <div className="email-div">
              <p className="email">{userData?.email}</p>
            </div>
            <div className="phone-div">
              <p className="phone">{userData?.phone}</p>
            </div>
            <div className="address-div">
              <p className="address">1</p>
            </div>
          </div>
        </div>
        <div className="button-div">
        <button className="logout-button" onClick={handlelogout}>logout</button>
        </div>
      </div>
      <div className="user-available-items">
        <div className="buy-history">
          <p>Buy history</p>
        </div>
        <div className="boughtContainer">
            {boughtArray?.map((product, index) => (
              <div key={index}>
                <h3>{product.title}</h3>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};
