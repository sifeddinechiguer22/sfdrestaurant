import React, { useState, useEffect } from 'react';
import './App.css';

// Import des composants
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const Menu = React.lazy(() => import('./components/Menu'));
const Location = React.lazy(() => import('./components/Location'));
const About = React.lazy(() => import('./components/About'));
const Reservation = React.lazy(() => import('./components/Reservation'));

function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'menu':
        return <Menu />;
      case 'localisation':
        return <Location />;
      case 'informations':
        return <About />;
      case 'reservation':
        return <Reservation />;
      default:
        return <Hero onReservationClick={() => setActiveSection('reservation')} />;
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">🕌 SFD</div>
          <div className="loading-spinner"></div>
          <p>Chargement des saveurs marocaines...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <React.Suspense fallback={<div>Chargement...</div>}>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="main-content">
          {renderSection()}
        </main>
      </React.Suspense>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Restaurant SFD. Tous droits réservés.</p>
          <p>Saveurs du Maroc Authentiques</p>
        </div>
      </footer>
    </div>
  );
}

export default App;