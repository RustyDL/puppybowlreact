import React, { useState, useEffect } from 'react';
import { fetchAllPlayers } from '../ajaxHelpers'; // Adjust the path accordingly

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const fetchedPlayers = await fetchAllPlayers();
      setPlayers(fetchedPlayers);
    };

    fetchPlayers();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h4>{player.name}</h4>
          {/* Display other player details as needed */}
        </div>
      ))}
    </div>
  );
};

export default AllPlayers;
