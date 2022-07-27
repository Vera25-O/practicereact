

import React from "react";

//navbar

import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
//navbarS
function App() {
 
 
  return (
    
    <div className="app">
      
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/posts" element={<Posts />} />
        
      </Routes>
   
     
   </div>
  );
}

export default App;
