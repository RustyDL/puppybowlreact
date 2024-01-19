import React from 'react';
import { Link } from 'react-router-dom';
import AllPlayers from '../components/AllPlayers';
import HomePage from '../components/HomePage';
import NewPlayerForm from '../components/NewPlayerForm';

const NavBar = () => {
  return (
    <div id="navbar">
      <HomePage />
      <Link to="/new">Create New Player</Link>
      <AllPlayers />
    </div>
  );
};

export default NavBar;
