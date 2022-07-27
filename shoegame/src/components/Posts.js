import React from 'react'
import { useState, useEffect } from "react";
import ShoesContainer from "./ShoesContainer";
import NewShoeForm from "./NewShoeForm";

function Posts() {

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
    <div className='post'>
<div className="sidebar">
       
       {true? <NewShoeForm updateShoes={upDateShoes} /> : null}
     </div>
     <ShoesContainer shoes={shoes} setShoes={setShoes} />

    </div>
  )
}

export default Posts;