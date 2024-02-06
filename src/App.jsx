import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../src/components/NavBar'
import HomePage from '../src/components/HomePage'
import AllPlayers from '../src/components/AllPlayers';
import SinglePlayer from '../src/components/SinglePlayer';
import NewPlayerForm from '../src/components/NewPlayerForm';
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //const [foundPlayer, setFoundPlayer] = useState('')
  return (
    <>
    {/* <NavBar setFoundPlayer={setFoundPlayer}/> */}
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/allplayers' element={<AllPlayers />}></Route>
      <Route path='/players/:id' element={<SinglePlayer />}></Route>
      <Route path='/newplayers' element={<NewPlayerForm />}></Route>
    </Routes>
      
    </>
  );
};

export default App;