import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePlayer = () => {
  const [singlePlayer, setSinglePlayer] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();

  const playerId = params.id;
  console.log("player id", playerId);

  useEffect(() => {
    async function singlePlayerData(playerId) {
      const singlePlayerData = await fetchSinglePlayer(playerId);
      if (singlePlayerData instanceof Error) {
        setError(singlePlayerData);
      }
      console.log("from the fetch single data", singlePlayerData);
      setSinglePlayer(singlePlayerData);
    }
    fetchSinglePlayerData(playerId);
  }, []);

  return (
    <div>
      {error && !singlePlayer && <p>Failed to load single player card.</p>}
      <div>
        <div>
          <img src={singlePlayer.imageUrl} alt={singlePlayer.name}></img>
        </div>
        <div>
          <h3>{singlePlayer.name}</h3>
          <p>
            <b>Breed:</b> {singlePlayer.breed}
          </p>
          <p>
            <b>Status:</b> {singlePlayer.status}
          </p>

          <button
            onClick={() => {
              handleRemove(singlePlayer.id);
            }}
          >
            {" "}
            Delete Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
