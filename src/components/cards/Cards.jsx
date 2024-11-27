import './cards.css';
import bathIcon from '../../assets/majesticons_bath-shower(1).png';
import parkingIcon from '../../assets/parking-garage-svgrepo-com.png';
import bedIcon from '../../assets/Vector(1).png';
import smallImg from '../../assets/68543.jpg';
import largeImg from '../../assets/864.jpg';
import largeImg2 from '../../assets/4125.jpg';
import smallImg2 from '../../assets/Frame 7.jpg';
import largeImg3 from '../../assets/Frame6 6.jpg';
import smallImg3 from '../../assets/Frame7 7.jpg';
import largeImg4 from '../../assets/Frame 6.jpg';
import smallImg4 from '../../assets/Frame 7.jpg';
import nextIcon from '../../assets/Frame 8.png';
import prevIcon from '../../assets/Frame 10.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Cards data
const cards = [
    {
        id: 1,
        smallImg: smallImg,
        largeImg: largeImg,
        price: "2,188,000",
        location: "27 Blackwell Crt , Markham - Buttonville Freehold Townhouse",
        facilities: [
            { id: 1, number: 2, icon: bedIcon },
            { id: 2, number: 2, icon: bathIcon },
            { id: 3, number: 2, icon: parkingIcon }
        ]
    },
    {
        id: 2,
        smallImg: smallImg2,
        largeImg: largeImg2,
        price: "949,900",
        location: "1924 Lobelia Way, Orleans - Cumberland And Area, ON",
        facilities: [
            { id: 1, number: 3, icon: bedIcon },
            { id: 2, number: 2, icon: bathIcon },
            { id: 3, number: 2, icon: parkingIcon }
        ]
    },
    {
        id: 3,
        smallImg: smallImg3,
        largeImg: largeImg3,
        price: "1,108,000",
        location: "471 Keith Crescent, Orleans - Convent Glen And Area, ON",
        facilities: [
            { id: 1, number: 2, icon: bedIcon },
            { id: 2, number: 1, icon: bathIcon },
            { id: 3, number: 1, icon: parkingIcon }
        ]
    },
    {
        id: 4,
        smallImg: smallImg4,
        largeImg: largeImg4,
        price: "957,000",
        location: "401 Cinnamon Crescent, Carp Dunrobin Huntley Fitzroy And",
        facilities: [
            { id: 1, number: 3, icon: bedIcon },
            { id: 2, number: 1, icon: bathIcon },
            { id: 3, number: 2, icon: parkingIcon }
        ]
    },
    {
        id: 5,
        smallImg: smallImg,
        largeImg: largeImg,
        price: "2,188,000",
        location: "27 Blackwell Crt , Markham - Buttonville Freehold Townhouse",
        facilities: [
            { id: 1, number: 2, icon: bedIcon },
            { id: 2, number: 2, icon: bathIcon },
            { id: 3, number: 2, icon: parkingIcon }
        ]
    },
    {
        id: 6,
        smallImg: smallImg2,
        largeImg: largeImg2,
        price: "949,900",
        location: "1924 Lobelia Way, Orleans - Cumberland And Area, ON",
        facilities: [
            { id: 1, number: 3, icon: bedIcon },
            { id: 2, number: 2, icon: bathIcon },
            { id: 3, number: 2, icon: parkingIcon }
        ]
    },
    {
        id: 7,
        smallImg: smallImg3,
        largeImg: largeImg3,
        price: "1,108,000",
        location: "471 Keith Crescent, Orleans - Convent Glen And Area, ON",
        facilities: [
            { id: 1, number: 2, icon: bedIcon },
            { id: 2, number: 1, icon: bathIcon },
            { id: 3, number: 1, icon: parkingIcon }
        ]
    },
    {
        id: 8,
        smallImg: smallImg4,
        largeImg: largeImg4,
        price: "957,000",
        location: "401 Cinnamon Crescent, Carp Dunrobin Huntley Fitzroy And",
        facilities: [
            { id: 1, number: 3, icon: bedIcon },
            { id: 2, number: 1, icon: bathIcon },
            { id: 3, number: 2, icon: parkingIcon }
        ]
    },
    {
        id: 9,
        smallImg: smallImg,
        largeImg: largeImg,
        price: "2,188,000",
        location: "27 Blackwell Crt , Markham - Buttonville Freehold Townhouse",
        facilities: [
            { id: 1, number: 2, icon: bedIcon },
            { id: 2, number: 2, icon: bathIcon },
            { id: 3, number: 2, icon: parkingIcon }
        ]
    },
    {
        id: 10,
        smallImg: smallImg2,
        largeImg: largeImg2,
        price: "949,900",
        location: "1924 Lobelia Way, Orleans - Cumberland And Area, ON",
        facilities: [
            { id: 1, number: 3, icon: bedIcon },
            { id: 2, number: 2, icon: bathIcon },
            { id: 3, number: 2, icon: parkingIcon }
        ]
    },
    {
        id: 11,
        smallImg: smallImg3,
        largeImg: largeImg3,
        price: "1,108,000",
        location: "471 Keith Crescent, Orleans - Convent Glen And Area, ON",
        facilities: [
            { id: 1, number: 2, icon: bedIcon },
            { id: 2, number: 1, icon: bathIcon },
            { id: 3, number: 1, icon: parkingIcon }
        ]
    },
    {
        id: 12,
        smallImg: smallImg4,
        largeImg: largeImg4,
        price: "957,000",
        location: "401 Cinnamon Crescent, Carp Dunrobin Huntley Fitzroy And",
        facilities: [
            { id: 1, number: 3, icon: bedIcon },
            { id: 2, number: 1, icon: bathIcon },
            { id: 3, number: 2, icon: parkingIcon }
        ]
    },
];

function chunkCards(cards, chunkSize = 4) {
    const chunks = [];
    for (let i = 0; i < cards.length; i += chunkSize) {
        chunks.push(cards.slice(i, i + chunkSize));
    }
    return chunks;
}
const cardChunks = chunkCards(cards);

const Cards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    /*  const handleNext = () => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % cardChunks.length);
     };
 
     const handlePrev = () => {
         setCurrentIndex((prevIndex) => (prevIndex - 1 + cardChunks.length) % cardChunks.length);
     };
  */
    const handleNavigate = () => {
        navigate("/detail");
    };

    const visibleCards = 4; // Number of cards shown per slide
    const totalSlides = Math.ceil(cards.length / visibleCards); // Total number of slides


    const handleNext = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1); // Move to the next slide
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // Move to the previous slide
        }
    };


    return (
        <div className="cards-slider">
            <div className="cards-container">
                <div className="card-slider-wrapper" style={{
                    transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                    width: `${totalSlides * 100}%`,
                }}>
                    {/* Render each chunk as a slide */}
                    {cards.map((card, index) => (
                        <div className="cards-slide" key={index} >
                            {cards.map((card) => (
                                <div className="card" key={card.id} onClick={handleNavigate}>
                                    <div className="image-container">
                                        <img src={card.smallImg} alt={card.location} />
                                        <img src={card.largeImg} alt={card.location} />
                                    </div>
                                    <h4>Listed: <span>${card.price}</span></h4>
                                    <p>{card.location}</p>
                                    <div className="facilities">
                                        {card.facilities.map((facility) => (
                                            <div className="facility" key={facility.id}>
                                                <img src={facility.icon} alt="facility" width="10px" height="25px" />
                                                <p>{facility.number}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            {/* Slide buttons */}
            <div className="slider">
                <img src={prevIcon} alt="prev" onClick={handlePrev} />
                <div className="lines-container">
                    {/* Line indicators */}
                    {cardChunks.map((_, index) => (
                        <div
                            className={`line ${index === currentIndex ? 'active' : ''}`}
                            key={index}
                        ></div>
                    ))}
                </div>
                <img src={nextIcon} alt="next" onClick={handleNext} />
            </div>
        </div>
    );
};

export default Cards;
