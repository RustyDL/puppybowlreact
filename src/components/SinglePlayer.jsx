import { useNavigate, useParams } from "react-router-dom";

export default function SinglePlayer({ players }) {
  const { playerId } = useParams();
  console.log(playerId);
  const matchedPlayer = players.find((player) => {
    return player.id == playerId;
  });

  const navigate = useNavigate();

  async function handleDelete({ singlePlayer }) {
    try {
      const result = await deletePuppy(singlePlayer);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>{matchedPlayer.name}</h1>
      <h1>{matchedPlayer.breed}</h1>
      <h1>{matchedPlayer.status}</h1>
      <img src={matchedPlayer.imageUrl} alt={matchedPlayer.name} />
      <h1>{matchedPlayer.teamId}</h1>
      <button onClick={handleDelete}>Delete Puppy</button>
    </>
  );
}