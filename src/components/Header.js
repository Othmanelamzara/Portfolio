import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/project1">Projet 1</Link></li>
          <li><Link to="/project2">Projet 2</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/testimonials">Témoignages</Link></li>
          <li><Link to="/addtestimonial">Ajouter votre Témoignage</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
