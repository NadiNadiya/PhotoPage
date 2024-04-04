import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";



const PhotosPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    }

    return (
        <div className="photos">
            <Carousel selectedItem={currentSlide} onChange={handleSlideChange}>
                <div>
                    <img src={img1} alt="Image 1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt="Image 2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt="Image 3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default PhotosPage;
