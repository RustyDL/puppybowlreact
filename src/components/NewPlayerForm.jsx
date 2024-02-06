import {  useState, useEffect } from 'react';
import { postPlayer } from '../API/FunctionHandler.js';
import classes from '../components/NewplayerForm.module.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const  NewPlayerForm = () => {  
    const [puppyName, setPuppyName] = useState("");
    const [puppyBreed, setPuppyBreed] = useState("");
    const [playerStatus, setPlayerStatus] = useState("bench");
    const [imageUrl, setImageUel] = useState("");

    const navigate = useNavigate();

      function submitHandler(event){
      event.preventDefault();
      console.log(puppyName,puppyBreed,playerStatus,imageUrl );
    }

        //  useEffect(()=> {
        //   async function postPuppy(){
        //     await postPlayer();
        //   }
        //   postPuppy()
        //  },[]);
        const player = {
          name: puppyName,
          breed: puppyBreed,
          imageUrl: imageUrl,
          status: playerStatus
        }
         
    
        function submitHandler(e) {
          e.preventDefault();
          postPlayer(player) //player variables is an object with the staste as the values
          navigate('/allplayers')
        }
      console.log(player)
         

        const resetHandler =()=>{
        setPuppyName('');
        setPuppyBreed('');

// we can dynamically update this state object whenever the inputChangeHandler is executed
        };

    return (
        
       <form onSubmit={submitHandler} className={classes.form} >
        <div className={classes['input-group']}>
            
                <label className={classes.label} htmlFor="name">NAME:</label>
                <input className={classes.input} 
              type="text" 
              id="name" 
              value={puppyName}
              onChange={(e)=> setPuppyName(e.target.value)}
              /><br />

                   <label className={classes.label} htmlFor="breed">BREED:</label>
                <input className={classes.input} 
              type="text" 
              id="breed"
              value={puppyBreed}
              onChange={(e)=> setPuppyBreed(e.target.value)}
              /><br />

                     <label className={classes.label} htmlFor="url">ImageUrl:</label>
                <input className={classes.input} 
              type="text" 
              id="url" 
              value={imageUrl}
              onChange={(e)=> setImageUel(e.target.value)}
              /> <br />

            <label className={classes.label}>
          Status:
          <select className={classes.label}
            value={playerStatus}
            onChange={(e)=>setPlayerStatus(e.target.value) }
          >
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label> 
        </div>
        <p className={classes.buttons}>
            <Button className={classes.button} variant="outline-warning" onClick={resetHandler} type="reset">Reset</Button>{' '}
        </p>
            <button className={classes.button} variant="outline-success">Add Player</button>{' '}
       </form>
    );
};

export default NewPlayerForm;