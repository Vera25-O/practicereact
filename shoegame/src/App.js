import { useState, useEffect } from "react";
import ShoesContainer from "./components/ShoesContainer";
import NewShoeForm from "./components/NewShoeForm";

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
      <div className="sidebar">
       
        {isDisplayed ? <NewShoeForm updateShoes={upDateShoes} /> : null}
      </div>
      <ShoesContainer shoes={shoes} setShoes={setShoes} />
    </div>
  );
}

export default App;
