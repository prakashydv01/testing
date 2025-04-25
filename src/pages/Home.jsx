import React, {useState} from 'react';
import HeroSection from '../components/sections/Hero';
import Navbar from '../components/sections/Navbar';

import TravelPage from '../components/sections/TravelPage';
import Footer from '../components/layout/Footer';


const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // This would filter destinations in the DestinationGrid component
  };

  return (
    <>
         <Navbar/>
      <HeroSection />
    <TravelPage/>
      {/* Other sections can be added here */}
     
    
      <Footer />
    </>
  );
};

export default HomePage;