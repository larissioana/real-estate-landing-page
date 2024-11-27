import React from 'react'
import './detailPagenavBar.css'
import Searchbar from '../../searchbar/Searchbar'
import logo from '../../../assets/logo.png'

const DetailPageNavbar = ({ isMobile, setIsMobile }) => {
    return (
        <nav className="nav-detail">
            <div className="nav-left">
                <a href='/'>
                    <img src={logo} alt="logo" />
                </a>
                <div className="nav-search">
                    <Searchbar />
                </div>
            </div>
            <div className="nav-center">
                <a href="#">Home</a>
                <a href="#">Properties</a>
                <a href="#">Our Projects</a>
            </div>
            <div className="nav-right">
                <a href="#">Sign up</a>
            </div>
            <div className="burger" onClick={() => setIsMobile(!isMobile)}>
                <div className="line1"></div>
                <div className="line1"></div>
                <div className="line1"></div>
            </div>
            {
                isMobile &&
                <div className="mobile-navigation">
                    <div className="nav-center-mobile">
                        <a href="#">Home</a>
                        <a href="#">Properties</a>
                        <a href="#">Our Projects</a>
                    </div>
                    <div className="nav-right-mobile">
                        <a href="#">Sign up</a>
                    </div>
                </div>
            }
        </nav>
    )
}

export default DetailPageNavbar
