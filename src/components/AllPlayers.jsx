import { getAllPlayers, deletePlayer} from '../API/FunctionHandler.js'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import classes from '../components/AllPlayers.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {InputGroup, FormControl } from "react-bootstrap";




 const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState();
   
    

    const navigate = useNavigate();

    // a function use effect should not return a promise
    useEffect(()=>{
    async function getPlayer(){
      try{
      const response = await getAllPlayers();
      setPlayers(response)
      setIsLoading(false);
    } catch(error){
        console.log(error);
       }
    }
    getPlayer();
    },[]);
  
    if(isLoading) {
      return(
        <section className="puppy-isLoading">
          <p>Loading...</p>
        </section>
      )
    }
    function clickHandler(playerId){
      navigate(`/players/${playerId}`);
    };

       const deleteHandler = async (id) => {
       const response = await deletePlayer(id);//deleting from the database
       const notDeleted = players.filter(item => item.id !== id); //deleting it from state
      // console.log(notDeleted)
       setPlayers(notDeleted)
     }
       console.log(searchValue)
 
      function searchBars(e){
        e.preventDefault();
        const result = players.filter(item=>
          item.name.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchValue(result)
      }
      
    return ( 
    <div className={classes.allplayers} >
           <InputGroup className="mb-3">
                <FormControl onSubmit={searchBars}
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e)=>setSearchResult(e.target.value)}
                />
                <Button variant="outline-success" type="submit">Search</Button>
            </InputGroup>
       {players.map((player)=>(
          <Card key={player.id} className={classes.container}>
            <Card.Body className={classes.body}>
                 <Card.Text className={classes.text}>
                  <h1 className={classes.h1}>Name:{player.name}</h1>
                  <h1 className={classes.h1}>Breed:{player.breed}</h1>
                  <h1 className={classes.h1}>Teamid:{player.teamId}</h1>
                  <img className={classes.images}src  ={player.imageUrl} />
                  
                </Card.Text>
                 <Button onClick={()=>clickHandler(player.id)} variant="outline-success">View Puppy</Button>{' '}              
               <Button onClick={()=>deleteHandler(player.id)} variant="outline-danger">Delete Puppy</Button>{' '}
         </Card.Body>
        </Card>          
         ))}
    </div>
    );
};

export default AllPlayers;
