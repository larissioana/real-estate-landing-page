import './detailPage.css'
import shareIcon from '../../assets/material-symbols_share-outline.png'
import img from '../../assets/Frame 34.jpg'
import img2 from '../../assets/Frame 36.jpg'
import img3 from '../../assets/Frame 37.jpg'
import img4 from '../../assets/Frame 38.jpg'
import img5 from '../../assets/Frame 39.jpg'
import map from '../../assets/Frame 50.jpg'
import DetailPageNavbar from '../../components/navbar/detailPageNavBar/detailPageNavbar'

const DetailPage = ({ isMobile, setIsMobile }) => {
    return (
        <>
            <DetailPageNavbar isMobile={isMobile} setIsMobile={setIsMobile} />
            <div className="detail-container">
                <div className="detail-page-flex-container">
                    <h1>Blue Ridge Manor</h1>
                    <div className="share-container">
                        <button>
                            <img src={shareIcon} alt="share" />
                            share
                        </button>
                        <p>favorite</p>
                    </div>
                </div>
                <div className="detail-page-images-container">
                    <div className="images-container-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="images-container-right">
                        <img src={img2} alt="" />
                        <img src={img4} alt="" />
                        <img src={img3} alt="" />
                        <img src={img5} alt="" />
                    </div>
                </div>
                <div className="location-container">
                    <div className="location-left">
                        <div className="location-links">
                            <a href="#">Description</a>
                            <a href="#">Location</a>
                            <a href="#">Features & Amenities</a>
                            <a href="#">Interior Details</a>
                            <a href="#">Exterior & Yard</a>
                            <a href="#">Nearby Amenities</a>
                        </div>
                        <h2>Address: <span>1234 Kensington Road, Suite 10</span></h2>
                        <img src={map} alt="map" />
                    </div>
                    <div className="location-right">
                        <div className="location-right-status">
                            <div className="circle-status"></div>
                            <p>Available Status</p>
                        </div>
                        <div className="location-details">
                            <h4>Price: </h4>
                            <p>$750,000</p>
                            <h4>Down Payment: </h4>
                            <p>$5,000</p>
                            <h4>Square Footage: </h4>
                            <p>1,500 Sq. Ft</p>
                        </div>
                        <button>Start purchase</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPage
