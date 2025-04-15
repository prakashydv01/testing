import React, {useState} from 'react';
import HeroSection from '../components/sections/Hero';
import Navbar from '../components/sections/Navbar';
import DestinationsGrid from '../components/sections/Destination';

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
      <DestinationsGrid searchQuery={searchQuery} onSearch={handleSearch} />
      {/* Other sections can be added here */}
    
      <Footer />
    </>
  );
};

export default HomePage;