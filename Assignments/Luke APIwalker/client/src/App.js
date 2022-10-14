import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Home } from './components/Home';
import { People } from './components/People';
import { Planets } from './components/Planets';
import { Search } from './components/Search';
import { Error } from './components/Error';
import { useState } from 'react';


function App() {
  
  return (
    <BrowserRouter  className="App">
      <Search  />
      <Routes >
        <Route path ='/' element = {<Home />} />
        <Route  path = '/people/:id' element = {<People />} />
        <Route path = '/planets/:id' element = {<Planets />} />
        <Route path = '/error' element = {<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
