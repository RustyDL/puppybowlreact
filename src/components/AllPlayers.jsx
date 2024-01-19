import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../ajaxHelpers";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [filterPlayers, setFilterPlayers] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlayerData() {
      const playerData = await fetchPlayers();
      if (playerData instanceof Error) {
        setError(playerData);
      }
      setPlayers(playerData);
      setFilterPlayers(playerData);
    }
    fetchPlayerData();
  }, []); 

  const Filter = (event) => {
    setFilterPlayers(
      players.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };

  return (
    <div>
      <div>
        <h2>Search Players</h2>
        <input
          name="search"
          type="text"
          onChange={Filter}
          placeholder="Search Player Here..."
        />
      </div>
      <div>
        {error && !players && <p> Failed to load players from roster</p>}
        {players
          ? filterPlayers.map((player) => {
              return (
                <div key={player.name}>
                  <div>
                    <img
                      src={player.imageUrl}
                      alt={player.name}
                      className="playerImage"
                    ></img>
                  </div>
                  <div>
                    <h3>{player.name}</h3>
                    <p>
                      <b> Breed: </b>
                      {player.breed}
                    </p>
                    <p>
                      {" "}
                      <b>Status: </b>
                      {player.status}
                    </p>
                    <button onClick={() => navigate("/players/" + player.id)}>
                      Player Info
                    </button>
                  </div>
                </div>
              );
            })
          : !error && <p>Loading ...</p>}
      </div>
    </div>
  );
};