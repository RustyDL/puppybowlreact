// API functions for fetching, creating, and deleting players

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players';

export async function fetchPlayers(){
    try{
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players/");
        const data = await response.json();
        console.log(" All players",data.data.players);
        return data.data.players;
    }catch(e){
        console.error(e)
    };
};

export async function fetchSinglePlayer(playerId){
    try{
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players/" + playerId)
    const data = await response.json();
    console.log( "fetching single player",data.data.player);
    return data.data.player;
    }catch(e){
    console.error(e)
    }
    }

export const createNewPlayer = (playerData) => {
  // Implement creating a new player
};

export const handleRemove = async (id) =>{
    if(window.confirm("Do you REALLY want to remove the puppy player?")){
    try{
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players/" + id,
        {
            method: 'DELETE',
        })
        const result = await response.json();
        console.log(result)
    }catch(e){
        console.error(e)
    }
    }
    }
