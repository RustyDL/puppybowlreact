import "../src/App.jsx";
import AllPlayers from "../src/components/AllPlayers.jsx";
import fetchAllPuppies from "../src/API/index.js";
import SinglePlayer from "../src/components/SinglePlayer.jsx";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../src/components/NavBar.jsx";
import Searchbar from "../src/components/SearchBar.jsx";
import CreatePlayerForm from "../src/components/NewPlayerForm.jsx";

function App() {
  const [players, setPlayers] = useState([]);
  const [result, setResults] = useState([]);

  async function makePlayersUseful() {
    let puppyArray = await fetchAllPuppies();
    setPlayers(puppyArray);
  }

  useEffect(() => {
    makePlayersUseful();
  }, []);

  return (
    <>
      <div id="Searchbar">
        <Searchbar />
      </div>
      <div>
        <NavBar id="navBar" />
      </div>

      <div id="routeDiv">
        <Routes>
          <Route path="/" element={<AllPlayers players={players} />} />
          <Route
            path="/players/:playerId"
            element={<SinglePlayer players={players} />}
          />
          <Route path="/newPlayerForm" element={<CreatePlayerForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
