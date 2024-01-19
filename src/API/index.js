const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players/";

export default async function fetchAllPuppies() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    // console.log(result.data.players);
    return result.data.players;
  } catch (error) {
    console.error(error);
  }
}

//irl name this file services, thunks, etc. - this is the clearinghouse for adjusting all the API calls

const fetchSinglePuppy = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`);
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.player;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

// async function makePuppyUseful() {
//      let usefulPuppy = await fetchSinglePlayer();
//      console.log(usefulPuppy);
// }




// IGNORE FOR NOW, attempt at add new player
async function createPuppy(name, breed, image) {
  try {
    const response = await fetch(`${API_URL}/players`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, breed, image }),
      });

    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
}

async function deletePuppy(id) {
  try {
    const response = await fetch(`${API_URL}/players/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error)
  }
}

export { fetchSinglePuppy, createPuppy, deletePuppy };
