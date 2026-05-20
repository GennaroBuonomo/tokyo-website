import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Places from './pages/Places';
import Food from './pages/Food';
import PlaceDetail from './pages/PlaceDetail'; 
import FoodDetail from './pages/FoodDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <h1>Scopri Tokyo</h1>
          <p>La tua guida tra quartieri iconici e sapori autentici</p>
          
          <nav className="navbar">
            {/* IL PULSANTE HOME */}
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/places" className="nav-link">Luoghi</Link>
            <Link to="/food" className="nav-link">Cibo</Link>
          </nav>
        </header>

        <main>
          <Routes>
            {/* La rotta principale "/" ora mostra la Home */}
            <Route path="/" element={<Home />} />
            {/* Spostiamo la pagina dei luoghi su "/places" */}
            <Route path="/places" element={<Places />} />
            <Route path="/food" element={<Food />} />
            <Route path="/place/:id" element={<PlaceDetail />} />
            <Route path="/food/:id" element={<FoodDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;