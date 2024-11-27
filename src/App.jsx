import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import DetailPage from './pages/detailPage/DetailPage'
import HomePage from './pages/homePage/HomePage'
import DetailPageNavbar from './components/navbar/detailPageNavBar/detailPageNavbar'

function App() {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    if (isMobile) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage isMobile={isMobile} setIsMobile={setIsMobile} />} />
        <Route path='/detail' element={<DetailPage isMobile={isMobile} setIsMobile={setIsMobile} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
