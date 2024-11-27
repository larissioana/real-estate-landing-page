import Header from "../../components/header/Header"
import AboutUs from "../../components/aboutUs/AboutUs"
import Form from "../../components/form/Form"
import Navbar from "../../components/navbar/Navbar"

const HomePage = ({ isMobile, setIsMobile }) => {
    return (
        <>
            <Navbar isMobile={isMobile} setIsMobile={setIsMobile} />
            <Header />
            <AboutUs />
            <Form />
        </>
    )
}

export default HomePage
