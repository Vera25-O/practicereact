import React from "react";
import { useState } from "react";

function Shoe({
  id,
  name,
  description,
  image,
  favorite,
  updateShoes,
  isRead,
  onDelete,
}) {
  const [read, setRead] = useState(isRead);

  function handleDelete() {
    fetch(`http://localhost:3000/poems/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDelete(id))

      .catch((error) => console.log(error));
  }

  function addToFavourite() {
    fetch(` http://localhost:3000/shoes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json",
      },
      body: JSON.stringify({ favourite: !favorite }),
    })
      .then((response) => response.json())
      .then((data) => updatePoems(data))

      .catch((error) => console.log(error));
  }

  function markRead() {
    fetch(` http://localhost:3000/shoes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json",
      },
      body: JSON.stringify({ read: !read }),
    })
      .then((response) => response.json())
      .then((data) => setRead(!read))
      .catch((error) => console.log(error));
  }

  return (
    <div id={id}>
      <h3>{name}</h3>
      <p>{image}</p>
      <p>
        <strong>{description}</strong>
      </p>
      <button onClick={markRead}>
        {read ? "Mark as read" : "Mark as unread"}
      </button>

      <button onClick={addToFavourite}>
        {favorite ? "Remove Favourite" : "Add Favourite"}
      </button>

      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Shoe;
