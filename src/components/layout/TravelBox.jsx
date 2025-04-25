import React, { useState } from 'react';

const TravelBox = ({ travel, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="travel-box"
      style={{
        ...styles.travelBox,
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 15px 30px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="travel-image" style={styles.travelImage}>
        <img 
          src={travel.imageUrl} 
          alt={travel.title} 
          style={{ 
            ...styles.image,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }} 
        />
        
        <div className="rating" style={styles.rating}>
          ⭐ {travel.rating || 4.8}
        </div>
      </div>
      
      <div className="travel-content" style={styles.travelContent}>
        <div style={styles.badgeContainer}>
          <span className="badge" style={styles.badge}>Popular</span>
          <span className="duration" style={styles.duration}>
            {travel.duration} days
          </span>
        </div>
        
        <h3 style={styles.title}>{travel.title}</h3>
        <p style={styles.location}>
          <span style={styles.locationIcon}>📍</span> {travel.location}
        </p>
        
        <div style={styles.divider}></div>
        
        <p style={styles.description}>{travel.description}</p>
        
        <button 
          className="view-button"
          style={{
            ...styles.viewButton,
            backgroundColor: isHovered ? '#3a7bd5' : '#00d2ff'
          }}
          onClick={() => onViewDetails(travel.id)}
        >
          View Details
          <span style={styles.buttonArrow}> →</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  travelBox: {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    maxWidth: '300px',
    margin: '5px',
    background: 'white',
    position: 'relative',
    cursor: 'pointer'
  },
  travelImage: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  priceTag: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(0, 210, 255, 0.9)',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  },
  rating: {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '3px 10px',
    borderRadius: '20px',
    fontSize: '0.9rem'
  },
  travelContent: {
    padding: '20px'
  },
  badgeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px'
  },
  badge: {
    backgroundColor: '#ff4757',
    color: 'white',
    padding: '3px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  duration: {
    color: '#666',
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  title: {
    margin: '0 0 8px 0',
    color: '#333',
    fontSize: '1.4rem',
    fontWeight: '700'
  },
  location: {
    color: '#666',
    fontSize: '0.95rem',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center'
  },
  locationIcon: {
    marginRight: '5px'
  },
  divider: {
    height: '1px',
    backgroundColor: '#eee',
    margin: '15px 0'
  },
  description: {
    color: '#555',
    fontSize: '0.95rem',
    marginBottom: '20px',
    lineHeight: '1.5',
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  viewButton: {
    width: '100%',
    padding: '12px',
    background: 'linear-gradient(to right, #00d2ff, #3a7bd5)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonArrow: {
    fontSize: '1.2rem',
    marginLeft: '5px',
    transition: 'transform 0.3s ease'
  }
};

export default TravelBox;