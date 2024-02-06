import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getSinglePlayer from '../API/FunctionHandler'
import classes from '../components/SinglePlayer.module.css'
import Button from 'react-bootstrap/Button';
import someFunction from '/src/API/FunctionHandler.js';

export default function SinglePlayer() {
  const [singlePlayer, setSinglePlayer] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const someFunction = require('/src/API/FunctionHandler.js').default;
  const { id } = useParams();
  

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const player = await getSinglePlayer(id);
        console.log(player);
         setSinglePlayer(player);
      } catch (error) {
        setError(error);
      }
    }
    fetchPlayer();
  }, [id]);
      //console.log(singlePlayer)
  return (
    <div className={classes.container}>
    
      {error && <p>{error}</p>}
      {singlePlayer.length === 0 ? <p>Error loading data</p> : ""}
      {singlePlayer && (

        <section className={classes['single-container']}>
          <div className={classes['puppy-data']}>
            <h2>Name:{singlePlayer.name}</h2>
            <h3>Breed:{singlePlayer.breed}</h3>
            <h3>Status:{singlePlayer.status}</h3>
            <h3>Team: {singlePlayer.team && singlePlayer.team.name}</h3>
            <img className={classes.img} src={singlePlayer.imageUrl} />
          </div> 
          
          <Button className={classes.button} 
          variant="outline-success" onClick={
            ()=> navigate("/allplayers")}>Close</Button>{' '}
        </section>
      )}
    </div>
  );
      }