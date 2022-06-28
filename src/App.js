
import React, { useEffect } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';


function App() {
  useEffect(() => {
    
  })
  
  return (
    <div className="App">
      <NavBar/>
     <Banner/>
     <RowPost/>
    </div>
  );
}

export default App;
