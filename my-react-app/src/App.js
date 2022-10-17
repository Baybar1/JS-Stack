import './App.css';
import React from 'react';
import { Planets } from './components/Planets';
import {PlanetInfo} from './components/PlanetInfo';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter className = 'App'>
      <h2><Link to = '/'>Home</Link></h2>
    <Routes>
      <Route path = '/' element = {<Planets/>} />
      <Route path = '/info/:id' element = {<PlanetInfo/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
