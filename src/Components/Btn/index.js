
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles.css';

function Btn() {
    return (
      <div>
          <button className="hero-btn">
                <Link to="/tuto" className="hero-link">Découvrez nos tutoriels dès maintenant.</Link>
                <div className="icon-wrapper">
  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</div>
            </button>
      </div>
    );
  }
  export default Btn;
  