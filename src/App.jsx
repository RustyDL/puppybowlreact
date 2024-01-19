import { useState } from 'react'
import '../src/App.jsx'
import NavBar from '../src/components/NavBar.jsx'
import SinglePlayer from '../src/components/SinglePlayer.jsx'
import MainContainer from '../src/components/HomePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      <div id="navbar">
       <NavBar />
       </div> 
      <div id="main-section">
       <MainContainer />
      </div>
      </div>
      <div>
        <SinglePlayer />
      </div>
    </>
  )
}

export default App
