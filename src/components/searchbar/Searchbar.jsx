import { useLocation } from 'react-router-dom'
import searchIcon from '../../assets/Frame 32(1).png'

const Searchbar = () => {
    const location = useLocation();
    return (
        <div
            className="form"
            style={{
                border: location.pathname === '/detail' ? "1px solid rgb(81, 181, 251)" : "none",
                padding: location.pathname === '/detail' ? ".3rem .5rem" : ".3rem .7rem"
            }}
        >
            <input
                type="text"
                placeholder="Enter an address, neighborhood, city"
            />
            <img src={searchIcon} alt="search" className="search-img" height="50px"
                style={{
                    height: location.pathname === '/detail' ? "40px" : "50px"
                }}
            />
        </div>
    )
}

export default Searchbar
