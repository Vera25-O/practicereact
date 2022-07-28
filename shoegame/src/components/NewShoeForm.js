import { useState } from "react";

function NewShoeForm({ updateShoes }) {
  const [newData, setNewData] = useState({
    name: "",
    image: "",
    description: "",
  });

  function onSubmission(e) {
    e.preventDefault();
    if (
      newData.name === "" ||
      newData.image === "" ||
      newData.description === ""
    ) {
      alert("Please input all fields");
    } else {
      fetch("https://morning-stream-44230.herokuapp.com/shoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => response.json())
        .then((data) => {
          updateShoes(data);
          setNewData({ ...newData, name: "", description: "", image: "" });
        });
    }
  }

  function doChange(e) {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  }

  return (
    <div className="sidebar">
    <form className="new-shoe-form" onSubmit={onSubmission}>
      <input
        value={newData.name}
        name="name"
        placeholder="Name"
        onChange={doChange}
      />
      <input
        value={newData.description}
        name="description"
        placeholder="Description"
        onChange={doChange}
      />
      <input
        value={newData.image}
        name="image"
        placeholder="Put your shoe image url here..."
        onChange={doChange}
      />
      <input type="submit" value="Post your shoe" />
    </form>
    </div>
  );
}

export default NewShoeForm;
