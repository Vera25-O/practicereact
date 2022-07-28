import { useState, useEffect } from "react";

import React from "react";

//navbar

import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Posts from './components/Posts';
import NewShoeForm from './components/NewShoeForm';
//navbarS
function App() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("https://morning-stream-44230.herokuapp.com/shoes")
      .then((response) => response.json())
      .then((shoes) => setShoes(shoes));
  }, []);

  

  function upDateShoes(shoe) {
    setShoes([...shoes, shoe]);
  }


 
  return (
    
    <div className="app">
      
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/posts" element={<Posts  shoes={shoes} setShoes={setShoes}/>} />
         <Route path="/new" element={<NewShoeForm updateShoes={upDateShoes}/>} />
      </Routes>
   
     
   </div>
  );
}

export default App;
