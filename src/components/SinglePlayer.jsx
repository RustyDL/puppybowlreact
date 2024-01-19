import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPlayerById, deletePlayer } from '../ajaxHelpers';

const SinglePlayer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const fetchedPlayer = await getPlayerById(id);
      setPlayer(fetchedPlayer);
    };

    fetchPlayer();
  }, [id]);

  const handleButtonClick = () => {
    navigate('/');
  };

  const handleDeleteClick = async () => {
    await deletePlayer(id);
    navigate('/');
  };

  return (
    <div>
      {player ? (
        <div>
          <h2>{player.name}'s Details</h2>
          {/* Display other player details */}
          <button onClick={handleButtonClick}>Back to All Players</button>
          <button onClick={handleDeleteClick} className="delete-button">
            Delete Player
          </button>
        </div>
      ) : (
        <p>Loading player details...</p>
      )}
    </div>
  );
};

export default SinglePlayer;
