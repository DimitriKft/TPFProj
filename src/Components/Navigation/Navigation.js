// Navigation.js

import './nav.css';
import logo from '../../images/logoDom.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons';


function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/">
        <img src={logo} className="menu-img" alt="Logo" />
      </NavLink>
      <ul className="menu-list">
        <li className="menu-item">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>
  {({ isActive }) => (
    <>
      <FontAwesomeIcon icon={faHome} className={isActive ? 'active-icon' : 'inactive-icon'}/>
      Accueil
    </>
  )}
</NavLink>

        </li>
        <li className="menu-item">
        <NavLink to="/tuto" className={({ isActive }) => 
  isActive ? 'active-link' : 'inactive-link'
}>
  {({ isActive }) => (
    <span>
      <FontAwesomeIcon icon={faBook} className={isActive ? 'active-icon' : 'inactive-icon'} />
      Tutoriel
    </span>
  )}
</NavLink>

        </li>
        {/* Ajouter d'autres éléments de menu ici si nécessaire */}
      </ul>
    </nav>
  );
}

export default Menu;
