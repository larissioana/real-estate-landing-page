import './footer.css'
import logo from '../../assets/logo.png'
import facebookIcon from '../../assets/facebook-3-logo-svgrepo-com 1.png'
import instagramIcon from '../../assets/instagram-2016-logo 1.png'
import groupIcon from '../../assets/Group.png'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <img src={logo} alt="logo" />
                <div className="footer-links">
                    <div className="col">
                        <h2>Our Projects</h2>
                        <a href="#">Residential Projects</a>
                        <a href="#">Commercial Developments</a>
                        <a href="#">Pre-Sale Listings</a>
                        <a href="#">Luxury Homes</a>
                        <a href="#">Completed Projects</a>
                        <a href="#">Upcoming Ventures</a>
                    </div>
                    <div className="col">
                        <h2>About Us</h2>
                        <a href="#">Our History</a>
                        <a href="#">Mission</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Follow Us</a>
                    </div>
                    <div className="col">
                        <h2>Why Choose Us?</h2>
                        <a href="#">Experience & Expertise</a>
                        <a href="#">Tailored Services</a>
                        <a href="#">Trust & Transparency</a>
                        <a href="#">24/7 Support</a>
                    </div>
                    <div className="col">
                        <h4>please Enter Your Email...</h4>
                        <div className="footer-form">
                            <input type="text" placeholder="info@yourcompany.com" className="footer-input" />
                            <button>Send</button>
                        </div>
                        <div className="icons-container">
                            <div className="icon">
                                <img src={groupIcon} alt="group" />
                            </div>
                            <div className="icon">
                                <img src={facebookIcon} alt="facebook" />
                            </div>
                            <div className="icon">
                                <img src={instagramIcon} alt="instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>&copy; 2024 Amelia Woods. All rights reserved.</p>
        </div>
    )
}

export default Footer
