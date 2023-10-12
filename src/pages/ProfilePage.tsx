import './ProfilePage.css'

export const ProfilePage = () => {


    return (
        <section className='profile-container'>
            <div className='megadiv'>
                <div className="user-profile-image">
                    <img src="https://robohash.org/hicveldicta.png?size=50x50&set=set1" alt="" />
                </div>
                <div className='user-name-div'>
                    <p className="user-name">User Name</p>
                </div>
                <div className='personal-info'>
                    <div className="full-name">
                        <p className='full-name-text'>Full Name</p>
                        <p className="firstname">Joe</p>
                        <p className="lastname">Biden</p>
                    </div>
                    <div className="email-div">
                        <p className="email-text">Email</p>
                        <p className='email'>god@gmail.com</p>
                    </div>
                    <div className="phone-div">
                        <p className="phone-text">Phone</p>
                        <p className="phone">12371923798</p>
                    </div>
                    <div className="address-div">
                        <p className="address-text">Address</p>
                        <p className="address">8374 anashe</p>
                    </div>
                </div>
            </div>
            <div className="user-available-items">
                <p>Buy history</p>
            </div>
        </section>


    )


};


