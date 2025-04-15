import React from 'react';
import { FaStar, FaMapMarkerAlt, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();
  
  // Sample data structure if none provided
  const sampleData = {
    id: 'italy-rome',
    country: 'Italy',
    city: 'Rome',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80',
    rating: 4.8,
    reviewCount: 1243,
    description: 'The Eternal City, home to ancient ruins, Renaissance art, and vibrant street life.',
    price: '$$$'
  };

  const data = destination || sampleData;

  const handleViewClick = () => {
    navigate(`/destination/${data.id}`, { state: { destination: data } });
  };

  return (
    <div className="destination-card">
      {/* CSS Styles */}
      <style jsx>{`
        .destination-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }
        
        .destination-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        
        .card-image {
          height: 200px;
          width: 100%;
          object-fit: cover;
          position: relative;
        }
        
        .price-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255,255,255,0.9);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          color: #2c3e50;
        }
        
        .card-content {
          padding: 1.5rem;
        }
        
        .location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4a6cf7;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        .country {
          color: #7f8c8d;
        }
        
        .city {
          font-weight: 600;
          color: #2c3e50;
        }
        
        .rating {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin: 0.5rem 0;
          color: #f39c12;
          font-weight: 600;
        }
        
        .review-count {
          color: #7f8c8d;
          font-size: 0.8rem;
          margin-left: 0.3rem;
        }
        
        .description {
          color: #7f8c8d;
          line-height: 1.6;
          margin: 1rem 0;
          font-size: 0.95rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .view-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.8rem;
          background: linear-gradient(135deg, #4a6cf7 0%, #2541b2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }
        
        .view-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(74,108,247,0.4);
        }
        
        .badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #ff4757;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
      `}</style>

      {/* Popular badge - optional */}
      {data.isPopular && <span className="badge">Popular</span>}
      
      {/* Destination image */}
      <img src={data.image} alt={`${data.city}, ${data.country}`} className="card-image" />
      <div className="price-tag">{data.price}</div>
      
      {/* Card content */}
      <div className="card-content">
        <div className="location">
          <FaMapMarkerAlt />
          <span className="country">{data.country}</span>
          <span>•</span>
          <span className="city">{data.city}</span>
        </div>
        
        <div className="rating">
          <FaStar />
          <span>{data.rating}</span>
          <span className="review-count">({data.reviewCount} reviews)</span>
        </div>
        
        <p className="description">{data.description}</p>
        
        <button className="view-btn" onClick={handleViewClick}>
          <FaEye /> View Destination
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;