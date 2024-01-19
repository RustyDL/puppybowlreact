import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const SinglePlayer = () => {
  const [singlePlayer, setSinglePlayer] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchSinglePlayerData = async () => {
      try {
        const data = await fetchSinglePlayer(id);
        setSinglePlayer(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchSinglePlayerData();
  }, [id]);

  const handleRemove = async (playerId) => {
    try {
      await deletePlayer(playerId);
      history.push("/"); // Redirect to the homepage after deletion
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  return (
    <div>
      {error && <p>Failed to load single player data.</p>}
      {Object.keys(singlePlayer).length > 0 && (
        <div>
          <div>
            <img src={singlePlayer.imageUrl} alt={singlePlayer.name} />
          </div>
          <div>
            <h3>{singlePlayer.name}</h3>
            <p>
              <b>Breed:</b> {singlePlayer.breed}
            </p>
            <p>
              <b>Status:</b> {singlePlayer.status}
            </p>
            <button onClick={() => handleRemove(singlePlayer.id)}>
              Delete Player
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePlayer;