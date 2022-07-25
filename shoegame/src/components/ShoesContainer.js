import React, { useState } from "react";
import Shoe from "./Shoe";

function ShoesContainer({ shoes, setShoes }) {
  const [selectedOption, setSelectedOption] = useState("All");

  function handleSelect(e) {
    setSelectedOption(e.target.value);
  }

  function onDelete(id) {
    const updated = shoes.filter((shoe) => shoe.id !== id);
    setShoes(updated);
  }

  function updateShoes(data) {
    const updatedShoes = shoes.map((shoe) => {
      if (shoe.id === data.id) {
        return data;
      }
      return shoe;
    });
    setShoes(updatedShoes);
  }

  const filteredShoes = shoes.filter((shoe) => {
    if (selectedOption === "All") {
      return shoe;
    }
    return shoe.favourite === true && selectedOption === "favourite";
  });

  const displayShoes = filteredShoes.map((shoe) => {
    return (
      <Shoe
        key={shoe.id}
        favorite={shoe.favourite}
        isRead={shoe.read}
        id={shoe.id}
        title={shoe.name}
        content={shoe.image}
        author={shoe.description}
        updatePoems={updateShoes}
        onDelete={onDelete}
      />
    );
  });

  return (
    <div className="shoes-container">
      <select onChange={handleSelect} value={selectedOption}>
        <option value="All">All Shoes</option>
        <option value="favourite">Favorites</option>
      </select>
     
      {displayShoes}
    </div>
  );
}

export default ShoesContainer;
