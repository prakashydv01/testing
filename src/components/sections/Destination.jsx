import React from 'react';
import DestinationCard from '../../pages/destiCard';


const DestinationsGrid = () => {
  const destinations = [
    {
      id: 'italy-rome',
      country: 'Italy',
      city: 'Rome',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80',
      rating: 4.8,
      reviewCount: 1243,
      description: 'The Eternal City, home to ancient ruins, Renaissance art, and vibrant street life.',
      price: '$$$',
      isPopular: true
    },
    {
      id: 'greece-santorini',
      country: 'Greece',
      city: 'Santorini',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80',
      rating: 4.8,
      reviewCount: 1243,
      description: 'The Eternal City, home to ancient ruins, Renaissance art, and vibrant street life.',
      price: '$$$',
      isPopular: true
    },
    {
      id: 'greece-santorini',
      country: 'Greece',
      city: 'Santorini',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80',
      rating: 4.8,
      reviewCount: 1243,
      description: 'The Eternal City, home to ancient ruins, Renaissance art, and vibrant street life.',
      price: '$$$',
      isPopular: true
    },
    {
      id: 'greece-santorini',
      country: 'Greece',
      city: 'Santorini',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80',
      rating: 4.8,
      reviewCount: 1243,
      description: 'The Eternal City, home to ancient ruins, Renaissance art, and vibrant street life.',
      price: '$$$',
      isPopular: true
    },
    {
      id: 'greece-santorini',
      country: 'Greece',
      city: 'Santorini',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80',
      rating: 4.8,
      reviewCount: 1243,
      description: 'The Eternal City, home to ancient ruins, Renaissance art, and vibrant street life.',
      price: '$$$',
      isPopular: true
    },
    // Add more destinations...
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {destinations.map(destination => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationsGrid;