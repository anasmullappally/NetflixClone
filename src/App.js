import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { action, originals, animation, adventure } from './urls'

function App() {


  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={animation} title='Animation' isSmall />
      <RowPost url={adventure} title='Adventure' isSmall />
    </div>
  );
}

export default App;
