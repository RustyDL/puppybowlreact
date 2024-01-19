import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../ajaxHelpers";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [filterPlayers, setFilterPlayers] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerData = await fetchAllPlayers();
        setPlayers(playerData);
        setFilterPlayers(playerData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); 

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setFilterPlayers(
      players.filter((player) => player.name.toLowerCase().includes(searchTerm))
    );
  };

  return (
    <div>
      <div>
        <h2>Search Players</h2>
        <input
          name="search"
          type="text"
          onChange={handleFilter}
          placeholder="Search Player Here..."
        />
      </div>
      <div>
        {error && <p>Error: {error.message}</p>}
        {players.length > 0 ? (
          filterPlayers.map((player) => (
            <div key={player.name}>
              <div>
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="playerImage"
                />
              </div>
              <div>
                <h3>{player.name}</h3>
                <p>
                  <b>Breed:</b> {player.breed}
                </p>
                <p>
                  <b>Status:</b> {player.status}
                </p>
                <button onClick={() => navigate("/players/" + player.id)}>
                  Player Info
                </button>
              </div>
            </div>
          ))
        ) : (
          !error && <p>Loading ...</p>
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
