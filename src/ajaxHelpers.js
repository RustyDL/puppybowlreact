const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players';

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const players = await response.json();
    return players;
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};
