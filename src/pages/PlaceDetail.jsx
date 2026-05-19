import { useParams, Link } from 'react-router-dom';
import data from '../data.json';

export default function PlaceDetail() {
  // useParams estrae i parametri dinamici dall'URL (in questo caso 'id')
  const { id } = useParams();
  
  // Cerchiamo il luogo corrispondente nell'array dei dati.
  // Nota: l'ID dall'URL è una stringa, quindi lo convertiamo in numero per il confronto.
  const place = data.places.find(p => p.id === parseInt(id));

  // Gestione dell'errore se l'ID non esiste
  if (!place) {
    return (
      <div className="detail-container">
        <h2>Luogo non trovato</h2>
        <Link to="/" className="back-link">← Torna all'elenco</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">← Torna all'elenco</Link>
      
      <div className="detail-header">
        <h1>{place.name}</h1>
        <span className="badge">{place.category}</span>
        {place.location && <p className="location-info"><strong>Quartiere:</strong> {place.location}</p>}
      </div>

      <img src={place.imageUrl} alt={place.name} className="detail-image" />
      
      <div className="detail-content">
        <p className="detail-description">{place.description}</p>
        {/* Qui potresti aggiungere altre informazioni come orari di apertura, mappa, ecc. */}
      </div>
    </div>
  );
}