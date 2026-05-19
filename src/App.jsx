import { useState } from 'react';
import data from './data.json';
import Card from './components/Card';
import './App.css';


function App() {
   // 1. Definiamo gli stati per la ricerca e il filtro
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tutti');
   // Le categorie disponibili per i bottoni
  const categories = ['Tutti', 'Quartiere', 'Tempio', 'Parco'];
   // 2. Filtriamo i luoghi in base allo stato attuale
  const filteredPlaces = data.places.filter((place) => {
    const matchSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = activeCategory === 'Tutti' || place.category === activeCategory;
    return matchSearch && matchCategory;
  })
 return(
  <div className="app-container">

    <header>
      <h1> Scopri Tokyo </h1>
      <p> La tua guida tra quartieri iconici e sapori autentici </p>
    </header>
     {/* Controlli di Ricerca e Filtro */}
    <div className="controls-section">
      <input 
       type="text" 
       placeholder="Cerca un luogo..."
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="filter-buttons">
        {categories.map(category => (
          <button
           key={category}
           className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
           onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>

    <main>
      {/* Sezione Luoghi */}
      <section>
        <h2> Luoghi da Visitare </h2>
        <div className="grid">
          {data.places.map((place) => (
            <card
             key={place.id}
             title={place.name}
             description={place.description}
             imageUrl={place.imageUrl}
             category={place.category}
             location={place.location}
            />
          ))}
        </div>
      </section>

      {/* Sezione Cibo */}
      <section>
        <h2> Cosa Magiare </h2>
        <div className="grid">
          {data.foods.map((food) => (
              <Card 
                key={food.id}
                title={food.name}
                description={food.description}
                imageUrl={food.imageUrl}
                category={food.category}
              />
            ))}
        </div>
      </section>
    </main>
  </div>
 )
}

export default App
