import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TravelBox from '../layout/TravelBox';

const TravelPage = () => {
  const navigate = useNavigate();
  
  // Sample travel data
  const travels = [
    {
      id: 1,
      title: 'Parisian Adventure',
      country: 'France',
      city: 'nepal',
      description: 'Discover the romantic city of Paris with its iconic landmarks.',
      
      duration: 5,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Tokyo Exploration',
      country: 'Japan',
      city: 'tokyo',
      description: 'Experience the blend of traditional and modern in vibrant Tokyo.',
      price: 1500,
      duration: 7,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'New York City',
      country: 'USA',
      city: 'new york',
      description: 'The city that never sleeps with endless attractions.',
      price: 1300,
      duration: 6,
      rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=800&auto=format&fit=crop'
    }
  ];

  // State management
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(travels.length / itemsPerPage);

  // Fetch blog data and navigate to blog page
  const handleViewDetails = async (travelId) => {
    const selectedTravel = travels.find(travel => travel.id === travelId);
    if (!selectedTravel) return;

    setIsLoading(true);
    
    try {
      const apiUrl = import.meta.env.VITE_BACKEND_GET_BLOG;
      const response = await axios.post(
        `${apiUrl}`,
        { category: selectedTravel.city.toLowerCase() },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      // Handle different response formats
      let blogData = [];
      if (Array.isArray(response.data.data)) {
        blogData = response.data.data;
      } else if (response.data.data && response.data.data._id) {
        blogData = [response.data.data];
      } else if (Array.isArray(response.data)) {
        blogData = response.data;
      } else if (response.data && response.data._id) {
        blogData = [response.data];
      }

      if (blogData.length > 0) {
        // Navigate to blog page with the data
        navigate('/blog', { 
          state: { 
            blogs: blogData,
            destination: selectedTravel.city 
          } 
        });
      } else {
        navigate('/blog', { 
          state: { 
            error: `No blogs found for ${selectedTravel.city}`,
            destination: selectedTravel.city
          } 
        });
      }
    } catch (error) {
      navigate('/blog', { 
        state: { 
          error: error.response?.data?.message || 'Failed to fetch blog articles',
          destination: selectedTravel.city
        } 
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Pagination handlers
  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Get current page items
  const currentItems = travels.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Discover Your Next Adventure</h1>
      <p style={styles.subheader}>Explore our handpicked selection of premium travel experiences</p>

      {/* Loading Indicator */}
      {isLoading && (
        <div style={loadingStyles.overlay}>
          <div style={loadingStyles.content}>
            <div style={loadingStyles.spinner}></div>
            <p>Loading destination guides...</p>
          </div>
        </div>
      )}

      {/* Travel Grid */}
      <div style={styles.travelGrid}>
        {currentItems.map(travel => (
          <TravelBox
            key={travel.id}
            travel={{
              ...travel,
              location: `${travel.city}, ${travel.country}`
            }}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        <button
          style={{
            ...styles.navButton,
            opacity: currentPage === 0 ? 0.5 : 1,
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer'
          }}
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        
        <span style={styles.pageIndicator}>
          Page {currentPage + 1} of {totalPages}
        </span>
        
        <button
          style={{
            ...styles.navButton,
            opacity: currentPage === totalPages - 1 ? 0.5 : 1,
            cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer'
          }}
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Main page styles
const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '80vh'
  },
  header: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '10px',
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(to right, #00d2ff, #3a7bd5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subheader: {
    textAlign: 'center',
    color: '#666',
    fontSize: '1.1rem',
    marginBottom: '40px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6'
  },
  travelGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
    justifyItems: 'center',
    marginBottom: '40px'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px'
  },
  navButton: {
    padding: '10px 25px',
    backgroundColor: '#00d2ff',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    ':hover': {
      backgroundColor: '#3a7bd5',
      transform: 'translateY(-2px)'
    },
    ':disabled': {
      backgroundColor: '#cccccc'
    }
  },
  pageIndicator: {
    color: '#666',
    fontSize: '1rem',
    fontWeight: '600'
  }
};

// Loading styles
const loadingStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  content: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
  },
  spinner: {
    border: '4px solid rgba(0,0,0,0.1)',
    borderLeftColor: '#3a7bd5',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 20px'
  }
};

// Add CSS animation for spinner
const styleElement = document.createElement('style');
styleElement.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleElement);

export default TravelPage;