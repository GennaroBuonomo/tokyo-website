import { useParams, Link } from 'react-router-dom';
import data from '../data.json';

export default function FoodDetails() {
  const { id } = useParams();
    
   const food = data.foods.find(f => f.id === parseInt(id));
   
   if(!food) {
    return(
      <div className="details-container">
        <h2>Piatto non trovato</h2>
        <Link to="/food" className="back-link">← Torna al cibo</Link>
      </div>
    );
   }
   return (
    <div className="detail-container">
      {/* Torniamo alla pagina /food invece che alla Home o ai luoghi */}
      <Link to="/food" className="back-link">← Torna al cibo</Link>
      
      <div className="detail-header">
        <h1>{food.name}</h1>
        <span className="badge">{food.category}</span>
      </div>

      <img src={food.imageUrl} alt={food.name} className="detail-image" />
      
      <div className="detail-content">
        <p className="detail-description">{food.description}</p>
      </div>
    </div>
  );
}