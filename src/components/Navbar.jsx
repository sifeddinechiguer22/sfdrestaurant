import React from 'react';
import './Navbar.css';

function Navbar({ activeSection, setActiveSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>🕌 SFD</h2>
          <span className="logo-subtitle">Restaurant Marocain</span>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <button 
              className={activeSection === 'accueil' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleNavClick('accueil')}
            >
              Accueil
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'menu' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleNavClick('menu')}
            >
              Menu
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'localisation' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleNavClick('localisation')}
            >
              Localisation
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'informations' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleNavClick('informations')}
            >
              Informations
            </button>
          </li>
          <li>
            <button 
              className="nav-link reservation-btn"
              onClick={() => handleNavClick('reservation')}
            >
              Réserver
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;