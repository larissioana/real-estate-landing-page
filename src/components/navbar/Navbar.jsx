import './navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Navbar = ({ isMobile, setIsMobile }) => {

    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Properties</a>
                <a href="#">Our Projects</a>
                <a href="#">FAQs</a>
                <a href="#">About Us</a>
            </div>
            <div className="sign-up">
                <a href="#">Sign up</a>
            </div>
            <div className="burger" onClick={() => setIsMobile(!isMobile)}>
                <div className="line1"></div>
                <div className="line1"></div>
                <div className="line1"></div>
            </div>
            {
                isMobile &&
                <div className="mobile-links">
                    <div className="nav-links-mobile">
                        <a href="#">Home</a>
                        <a href="#">Properties</a>
                        <a href="#">Our Projects</a>
                        <a href="#">FAQs</a>
                        <a href="#">About Us</a>
                    </div>
                    <div className="sign-up-mobile">
                        <a href="#">Sign up</a>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Navbar
