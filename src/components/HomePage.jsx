import {Routes, Route, Link } from 'react-router-dom'
import SinglePlayer from '../components/SinglePlayer';
import NewPlayerForm from '../components/NewPlayerForm'
import AllPlayers from '../components/AllPlayers';
import '../App.css'

export default function MainContainer() {
    return (
        <>
           <div id="main-section">
        <Routes>
          <Route path="/SinglePlayer" element={<SinglePlayer />} />
          <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
          <Route path="/AllPlayers" element={<AllPlayers />} />
        </Routes>
      </div>
      </>
    );
  }