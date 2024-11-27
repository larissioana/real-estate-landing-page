import './aboutUs.css'
import img1 from '../../assets/Rectangle 7(1).png'
import img2 from '../../assets/Rectangle 6.png'

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-left">
                <img src={img1} alt="" />
            </div>
            <div className="about-center">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nam augue massa nec hendrerit egestas. Ut lacus risus vestibulum a viverra. Dignissim morbi non et facilisis sed nibh. Etiam consectetur bibendum tristique eget mi nullam cras quisque pharetra. Ipsum pharetra id viverra amet tellus
                </p>
                <button>More</button>
            </div>
            <div className="about-right">
                <img src={img2} alt="" />
            </div>
        </div>
    )
}

export default AboutUs
