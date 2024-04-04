
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./Page2.css"

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
const Page2 = () =>{
    return (
        <div className="main">
           <header>
           <h1>Photographer</h1> 
           <li>wedding</li>
           <li>portrait</li>
           <li>family</li>
           <li>ivent</li>
           <li>baby</li>
           <li>business</li>
           <li>love story</li>
            </header>
            <main className="block">
                <div className='big'>
                    <p className="legend">Wedding</p>
                    <img src={img1} alt="Image 1" />
                </div>
                <div className='small'>
                    <div>
                        <p className="legend">Wedding</p>
                        <img src={img1} alt="Image 1" />
                    </div>
                    <div>
                        <p className="legend">Wedding</p>
                        <img src={img2} alt="Image 2" />
                    </div>
                    <div>
                        <p className="legend">Wedding</p>
                        <img src={img3} alt="Image 3" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Page2;