import './header.css'
import headerImg from '../../assets/Frame 33.webp'
import textImg from '../../assets/Find Your Ideal Place....png'
import Cards from '../cards/Cards'
import Searchbar from '../searchbar/Searchbar'

const Header = () => {
    return (
        <div className="header" style={{
            backgroundImage: `url(${headerImg})`,
            backgroundPosition: "center",
            height: "100vh",
            width: "100%"
        }}>
            <div className="header-desc">
                <img src={textImg} alt="Find Your Ideal Place..." className="header-text" />
                <Searchbar />
            </div>
            <div className="cards-wrapper">
                <Cards />
            </div>
        </div>
    )
}

export default Header
