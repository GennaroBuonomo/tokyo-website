export default function Card ({title, description, imageUrl, category, location}) {
  return(
    <div className="card">
      <img 
       src="{imageUrl}" 
       alt="{title}"
       style={{width: '100%', height: '200px', objectFit: 'cover'}} 
      />
      <div className="card-body">
        <span className="badge">{category}</span>
        <h3>{title}</h3>
        {/* Mostriamo la location solo se esiste*/}
        {location && <p><strong>Dove:</strong>{location}</p>}
        <p>{description}</p>
      </div>
    </div>
  )
}