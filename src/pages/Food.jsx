import data from '../data.json';
import Card from '../components/Card';

export default function Food() {
  return (
    <section>
      <h2>Cosa Mangiare</h2>
      <div className="grid">
        {data.foods.map((food) => (
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
  );
}