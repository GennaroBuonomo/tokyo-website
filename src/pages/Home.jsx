import data from '../data.json';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="home-container">
      {/* Vetrina dei Luoghi */}
      <section>
        <h2>I Luoghi Più Popolari</h2>
        <div className="grid">
          {/* Usiamo slice(0, 3) per mostrare solo i primi 3 luoghi */}
          {data.places.slice(0, 3).map((place) => (
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
          ))}
        </div>
      </section>

      {/* Vetrina del Cibo */}
      <section>
        <h2>Cibo da Non Perdere</h2>
        <div className="grid">
          {/* Usiamo slice(0, 3) per mostrare solo i primi 3 piatti */}
          {data.foods.slice(0, 3).map((food) => (
            <Card 
              key={food.id}
              id={food.id}
              type="food"
              title={food.name}
              description={food.description}
              imageUrl={food.imageUrl}
              category={food.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
}