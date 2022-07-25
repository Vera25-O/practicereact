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
      fetch(" http://localhost:3000/shoes", {
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
    <form className="new-shoe-form" onSubmit={onSubmission}>
      <input
        value={newData.title}
        name="name"
        placeholder="Name"
        onChange={doChange}
      />
      <input
        value={newData.author}
        name="description"
        placeholder="Description"
        onChange={doChange}
      />
      <textarea
        value={newData.image}
        name="image"
        placeholder="Post your shoe here..."
        rows={10}
        onChange={doChange}
      />
      <input type="submit" value="Share your shoe" />
    </form>
  );
}

export default NewShoeForm;
