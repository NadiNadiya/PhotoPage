import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

const Carousel3 = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    }

    const handlePrevious = () => {
        setCurrentSlide(currentSlide - 1);
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide + 1);
    }
    const handleClick = () => {
        navigate.push('/photos'); 
    }
    return (
        <div>
            <main class="main">
                <div class="carousel">
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
            {/* <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button> */}
            </div>
            <div class="text">
                <h1>Main text</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga eum at, quam explicabo vel dolorem obcaecati eligendi ipsa eius earum maiores excepturi sequi sit aperiam enim rerum facilis ab!
                Autem eveniet nesciunt accusantium odit, eius inventore hic ipsa odio quaerat maxime placeat perspiciatis neque, consequuntur omnis numquam deleniti soluta sed optio, eaque voluptatibus ducimus. Impedit animi dicta quisquam soluta.
                Aut expedita atque blanditiis iste tempora dolorem nesciunt, nisi cupiditate minima excepturi rerum impedit? Dignissimos a quasi sunt rerum, sed eligendi eaque ab modi facere iure, placeat temporibus saepe tempore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolores est eaque at doloremque corporis cumque, error debitis rerum sit voluptates, amet beatae neque. Animi iusto ipsa dicta possimus saepe.</h3>
                    <button onClick={handleClick}>More</button>
            </div>
             </main>
            
        </div>
    );
}

export default Carousel3;
