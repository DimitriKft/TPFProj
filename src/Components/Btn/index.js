import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles.css';

function Btn({ to, children }) { // Ajout de la prop `to` et `children` pour personnaliser le lien et le texte
    return (
      <div>
          <button className="hero-btn">
                <Link to={to} className="hero-link">{children}   <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></Link> {/* Utilisation de la prop `to` */}
             
            </button>
      </div>
    );
}

export default Btn;
