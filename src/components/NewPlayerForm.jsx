import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const [puppyName, setPuppyName] = useState("");
  const [puppyStatus, setPuppyStatus] = useState("");
  const [puppyBreed, setPuppyBreed] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function resetForm() {
    setError("");
    setPuppyName("");
    setPuppyBreed("");
    setPuppyStatus("");
  }
  async function handleSubmit(event) {
    event.preventDefault();

    console.log(puppyName, puppyStatus, puppyBreed);

    if (!error) {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: puppyName,
              status: puppyStatus,
              breed: puppyBreed,
            }),
          }
        );
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(e);
      }
    }
  }

  return (
    <>
      <div>
        <h3>Add New Player</h3>
        {error && <p>{error}</p>}
        <form method="POST" onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <input
              value={puppyName}
              onChange={(e) => setPuppyName(e.target.value)}
            />
          </label>
          <label>
            Breed:{" "}
            <input
              value={puppyBreed}
              onChange={(e) => setPuppyBreed(e.target.value)}
            />
          </label>
          <label>
            Status:{" "}
            <input
              value={puppyStatus}
              onChange={(e) => setPuppyStatus(e.target.event)}
            />
          </label>
          <button disabled={error} type="submit">
            Submit
          </button>
          <button type="reset" onClick={resetForm}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
}
