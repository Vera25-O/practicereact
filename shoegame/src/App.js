import { useState, useEffect } from "react";
import ShoesContainer from "./components/ShoesContainer";
import NewShoeForm from "./components/NewShoeForm"

function App() {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/shoes")
      .then((response) => response.json())
      .then((poems) => setPoems(poems));
  }, []);

  const formDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  function upDateShoes(shoe) {
    setShoes([...shoes, shoe]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={formDisplay}>Show/hide new shoe form</button>
        {isDisplayed ? <NewShoeForm updateShoes={upDateShoes} /> : null}
      </div>
      <ShoesContainer shoes={shoes} setShoes={setShoes} />
    </div>
  );
}

export default App;
