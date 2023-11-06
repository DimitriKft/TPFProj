// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation'; // Importez votre nouveau composant
import HomePage from './Pages/HomePage/HomePage';
import TutoPage from './Pages/TutorialsPage/TutorialsPage'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <Router>
      <Navigation /> {/* Utilisation du composant Navigation */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tuto" element={<TutoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
