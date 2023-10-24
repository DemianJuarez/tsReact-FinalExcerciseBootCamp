import "./ProfilePage.css";

export const ProfilePage = () => {


  const handlelogout = () => {
    localStorage.removeItem("sessionData");
    window.location.href = "/login";


  }

  return (
    <section className="profile-container">
      <div className="megadiv">
        <div className="user-profile-image">
          <img
            src="https://robohash.org/hicveldicta.png?size=50x50&set=set1"
            alt=""
          />
        </div>
        <div className="user-name-div">
          <p className="user-name">User Name</p>
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
              <p className="firstname">Joe</p>
              <p className="lastname">Biden</p>
            </div>
            <div className="email-div">
              <p className="email">god@gmail.com</p>
            </div>
            <div className="phone-div">
              <p className="phone">12371923798</p>
            </div>
            <div className="address-div">
              <p className="address">8374 anashe</p>
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
      </div>
    </section>
  );
};
