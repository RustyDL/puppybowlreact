import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import AllPlayers from '../src/components/AllPlayers';
import SinglePlayer from '../src/components/SinglePlayer';
import NewPlayerForm from '../src/components/NewPlayerForm';

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/new" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
