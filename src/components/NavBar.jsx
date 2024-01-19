import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All Players</Link>
        </li>
        <li>
          <Link to="/new">Create New Player</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
