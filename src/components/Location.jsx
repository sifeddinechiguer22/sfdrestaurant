import React from 'react';
import './Location.css';

function Location() {
  return (
    <section className="location-section">
      <div className="container">
        <div className="location-header">
          <h2>Nous Trouver</h2>
          <p className="location-subtitle">Venez nous rendre visite dans notre établissement chaleureux</p>
        </div>
        <div className="location-content">
          <div className="location-info">
            <div className="info-card">
              <h3>🕌 Restaurant SFD</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Adresse</strong>
                    <p>Rue de la Koutoubia, 40000<br />Marrakech, Maroc</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Téléphone</strong>
                    <p>+212 5 24 44 44 44</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>contact@sfd-restaurant.ma</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="opening-hours">
              <h4>🕒 Horaires d'ouverture</h4>
              <div className="hours-grid">
                <div className="hour-item">
                  <span>Lundi - Jeudi</span>
                  <span>12h00 - 23h00</span>
                </div>
                <div className="hour-item">
                  <span>Vendredi</span>
                  <span>12h00 - 23h30</span>
                </div>
                <div className="hour-item">
                  <span>Samedi</span>
                  <span>12h00 - 00h00</span>
                </div>
                <div className="hour-item">
                  <span>Dimanche</span>
                  <span>12h00 - 22h30</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="location-map">
            <div className="map-container">
              <div className="map-placeholder">
                🗺️ Carte Interactive - Localisation SFD Marrakech
                <div className="map-overlay">
                  <p>📍 Rue de la Koutoubia, Marrakech</p>
                  <p>À proximité de la place Jemaa el-Fna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;