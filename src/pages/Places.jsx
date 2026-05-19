import { useState } from 'react';
import data from '../data.json';
import Card from '../components/Card';

export default function Places() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const categories = ['Tutti', 'Quartiere', 'Tempio', 'Parco'];

  const filteredPlaces = data.places.filter((place) => {
    const matchSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = activeCategory === 'Tutti' || place.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <section>
      <h2>Luoghi da Visitare</h2>
      
      <div className="controls-section">
        <input 
          type="text" 
          placeholder="Cerca un luogo..." 
          className="search-bar"
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

      <div className="grid">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <Card 
              key={place.id}
              id={place.id}
              type="place"
              title={place.name}
              description={place.description}
              imageUrl={place.imageUrl}
              category={place.category}
              location={place.location}
            />
          ))
        ) : (
          <p className="no-results">Nessun luogo trovato con questi criteri.</p>
        )}
      </div>
    </section>
  );
}