import { useState } from "react";
import { createPuppy } from "../API/index";

export default function CreatePlayerForm({ players, setPlayers }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await createPuppy(name, breed, image);
    if (result.success) {
      console.log("New Player: ", result.data.newPlayer);

      const newPlayers = [...players, result.data.newPlayer];
      setPlayers(newPlayers);

      setName("");
      setBreed("");
      setImage("");
    } else {
      setError(result.error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {error && <p>{error}</p>}
      <h2>New Player Form</h2>
      <input
        value={name}
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={breed}
        type="text"
        name="breed"
        placeholder="breed"
        onChange={(e) => setBreed(e.target.value)}
      />
      <input
        value={image}
        type="text"
        name="image"
        placeholder="Image Url"
        onChange={(e) => setImage(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}