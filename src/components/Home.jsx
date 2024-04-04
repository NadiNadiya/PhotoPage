import '../App.css';
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/img1.jpg'; // Adjust the import path for images
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';
import Carousel3 from './Carousel3';
import Carousel4 from './Carousel4';
import PhotosPage from './PhotosPage';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel1/>
            <Carousel2/>
            <Carousel3/>
            <Carousel4/>
            <Footer/>
        </div>
    )

}

export default Home;
