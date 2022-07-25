import { useState, useEffect } from "react";
import ShoesContainer from "./components/ShoesContainer";
import NewShoeForm from "./components/NewShoeForm";
import React from "react";

//navbar

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
//navbarS
function App() {
 
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/shoes")
      .then((response) => response.json())
      .then((shoes) => setShoes(shoes));
  }, []);

  

  function upDateShoes(shoe) {
    setShoes([...shoes, shoe]);
  }

  return (
    
    <div className="app">
      
      {/* <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter> */}
      <div className="sidebar">
       
        {true? <NewShoeForm updateShoes={upDateShoes} /> : null}
      </div>
      <ShoesContainer shoes={shoes} setShoes={setShoes} />
    </div>
  );
}

export default App;
