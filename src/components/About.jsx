import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-header">
          <h2>À Propos de SFD</h2>
          <p className="about-subtitle">Notre histoire et notre passion pour la cuisine marocaine</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="story-card">
              <h3>🕌 Notre Histoire</h3>
              <p>
                Fondé en 1995 par la famille Benjelloun, le restaurant <strong>SFD</strong> 
                (Saveurs & Fines Dégustations) est né de la passion pour partager la richesse 
                gastronomique du Maroc avec le monde.
              </p>
              <p>
                Depuis près de 30 ans, nous accueillons nos clients dans une ambiance 
                chaleureuse et authentique, perpétuant les traditions culinaires transmises 
                de génération en génération.
              </p>
            </div>

            <div className="mission-card">
              <h3>🎯 Notre Mission</h3>
              <p>
                Offrir une expérience culinaire authentique qui transporte nos clients 
                au cœur des saveurs marocaines, en respectant les recettes traditionnelles 
                tout en utilisant des ingrédients frais et des épices sélectionnées avec soin.
              </p>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="chef-card">
              <h3>👨‍🍳 Notre Chef</h3>
              <div className="chef-info">
                <div className="chef-avatar">🕌</div>
                <div className="chef-details">
                  <h4>Mohamed Benjelloun</h4>
                  <p className="chef-experience">25 ans d'expérience</p>
                </div>
              </div>
              <p className="chef-quote">
                "Notre cuisine est un voyage sensoriel au cœur des traditions marocaines."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;