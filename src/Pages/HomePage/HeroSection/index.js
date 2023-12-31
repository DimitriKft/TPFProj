// src/components/HomePage/HeroSection/index.js

import './styles.css';
import heroImg from './Images/compositionHero.png';
import Btn from '../../../Components/Btn';

function HeroSection() {
    return (
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">The Pixel Family</h1>
            <h2 className="hero-subtitle">L'indépendance numérique<br></br> c'est maintenant !</h2>
            <p className="hero-description">Rejoignez <span className='spanTPF'>The Pixel Family</span>, ensemble, façonnons votre indépendance numérique et propulsez votre entreprise dans l'ère digitale avec nos formations sur-mesure</p>
            <Btn to="/tuto">Découvrez nos tutoriels dès maintenant.</Btn>
          </div>
          <div className="hero-image">
          <img src={heroImg} className="hero-img" alt="Logo" />
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  


