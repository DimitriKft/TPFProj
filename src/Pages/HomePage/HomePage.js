import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Autres contenus de la page d'accueil */}
      <Link to="/tutorials">Voir les tutoriels</Link> {/* Crée un lien vers TutorialPage */}
    </div>
  );
}

export default HomePage;
