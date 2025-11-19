import React from 'react';
import './Hero.css';

function Hero({ onReservationClick }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Restaurant Marocain SFD</h1>
        <p className="hero-subtitle">Découvrez l'authentique cuisine marocaine dans une ambiance chaleureuse</p>
        <p className="hero-description">
          Plongez dans les saveurs envoûtantes du Maroc avec nos tajines, couscous et pâtisseries traditionnelles.
          Un voyage culinaire au cœur des traditions marocaines.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={onReservationClick}>
            Réserver une table
          </button>
          <button className="btn-secondary">
            Voir le menu
          </button>
        </div>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🍛</span>
            <span>Cuisine Authentique</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🌿</span>
            <span>Produits Frais</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🕌</span>
            <span>Ambiance Traditionnelle</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Intérieur élégant du restaurant marocain SFD avec décoration traditionnelle"
          className="restaurant-image"
        />
      </div>
    </section>
  );
}

export default Hero;