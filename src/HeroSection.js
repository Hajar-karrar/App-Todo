import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import Footer from './Footer';
import Navbar from './Navbar';

const HeroSection = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/todo'); // Redirige vers la page des tâches
  };


  return (
    <div>
      <Navbar/>
      <div className="hero-container">
        
        <div className="hero-content">
          <h1>Free Online To-Do <br /> List Maker</h1>
          <button className="cta-button" onClick={handleButtonClick}>Create a to do list</button>
        </div>
        <div className="hero-image">
          <img src="plan.png" alt="" />
        </div>
      </div>

      <Footer/>
    </div>


  );
};

export default HeroSection;
