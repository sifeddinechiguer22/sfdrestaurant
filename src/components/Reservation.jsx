import React, { useState } from 'react';
import './Reservation.css';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('🎉 Votre réservation a été envoyée avec succès !');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="reservation-section">
      <div className="container">
        <div className="reservation-header">
          <h2>Réserver une Table</h2>
          <p className="reservation-subtitle">Réservez votre expérience culinaire marocaine</p>
        </div>
        
        <div className="reservation-content">
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>👤 Informations Personnelles</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+212 XXX XXX XXX"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>🕒 Détails de la Réservation</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Heure *</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    min="12:00"
                    max="23:00"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Nombre de personnes *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                    <option value="6">6 personnes</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>💫 Informations Complémentaires</h3>
              <div className="form-group">
                <label htmlFor="message">Message spécial</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Allergies, anniversaire, occasion spéciale, etc."
                />
              </div>
            </div>

            <button 
              type="submit" 
              className={`btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Confirmer la réservation'}
            </button>
          </form>

          <div className="reservation-info">
            <div className="info-card">
              <h3>📋 Informations importantes</h3>
              <ul className="info-list">
                <li>✅ Réservation confirmée sous 2 heures</li>
                <li>⏰ Merci d'arriver à l'heure</li>
                <li>👥 Groupes de plus de 8 personnes : nous contacter</li>
                <li>🚗 Parking disponible à proximité</li>
                <li>🌿 Options végétariennes disponibles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;