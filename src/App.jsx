import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from './components/Header';
import Carousel1 from './components/Carousel1.jsx';
import Carousel2 from './components/Carousel2';
import Carousel3 from './components/Carousel3';
import Carousel4 from './components/Carousel4';
import Footer from './components/Footer';
import PhotosPage from './components/PhotosPage';
import Home from './components/Home';
import Page2 from './components/Page2';
import NotFound from './components/NotFound';


function App() {
  return (
<Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carousel2" element={<Carousel2 />} />
          <Route path="/carousel3" element={<Carousel3 />} />
          <Route path="/carousel4" element={<Carousel4 />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
