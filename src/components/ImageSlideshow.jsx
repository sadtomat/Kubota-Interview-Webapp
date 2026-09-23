import { useState } from "react";
import './ImageSlideshow.css'

export default function ImageSlideshow({images}){
    const [currentIndex, setCurrentIndex] = useState(0);

    function toPrev() {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }

    function toNext() {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }

    if (!images || images.length === 0) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="slideshow-outerbox">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex+1}`} className="slideshow-img"/>
            <button className="slideshow-arrow l" onClick={toPrev}>⬅</button>
            <button className="slideshow-arrow r" onClick={toNext}>➡</button>
            <div className="slideshow-marker">
                {images.map((_, index) => (
                    <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(index)}/>
                ))}
            </div>
        </div>
    )
}