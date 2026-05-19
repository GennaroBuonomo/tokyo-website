import { Link } from 'react-router-dom';

// Aggiungiamo 'id' alle props e una nuova prop opzionale 'type' per distinguere luoghi da cibi
export default function Card({ id, title, description, imageUrl, category, location, type = 'place' }) {
  // Costruiamo l'URL di destinazione in base al tipo (es: /place/1 o /food/2)
  const detailUrl = `/${type}/${id}`;

  return (
    <Link to={detailUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <img 
          src={imageUrl} 
          alt={title} 
        />
        <div className="card-body">
          <span className="badge">{category}</span>
          <h3>{title}</h3>
          {location && <p><strong>Dove:</strong> {location}</p>}
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}