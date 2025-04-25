import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import BlogUploadPage from './pages/blogPost';
import BlogPage from './pages/blog/BlogPage';
import AboutPage from './pages/about';
import './style/app.css';


function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogUploadPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Add more routes as needed */}
        
        
        
        
      </Routes>
    </>
  );
}

export default App;