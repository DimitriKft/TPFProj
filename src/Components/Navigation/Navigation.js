// Navigation.js

import './nav.css';
import logo from '../../images/logoDom.png';
import { NavLink } from 'react-router-dom';


function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/">
        <img src={logo} className="menu-img" alt="Logo" />
      </NavLink>
      <ul className="menu-list">
        <li className="menu-item">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>
            Accueil
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/tuto"
            className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>
            Tutoriel
          </NavLink>
        </li>
        {/* Ajouter d'autres éléments de menu ici si nécessaire */}
      </ul>
    </nav>
  );
}

export default Menu;
