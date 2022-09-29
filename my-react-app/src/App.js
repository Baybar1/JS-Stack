import './App.css';
import React from 'react';
import { PersonCard } from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {'Randy'} lastName = {'Nunez'} age = {30} hairColor = {'Brown'}/>
      <PersonCard firstName = {'Ashley'} lastName = {'Perez'} age = {26} hairColor = {'Brown'}/>
      <PersonCard firstName = {'Daniel'} lastName = {'Rivera'} age = {17} hairColor = {'Blonde'}/>
      <PersonCard firstName = {'James'} lastName = {'Dunn'} age = {30} hairColor = {'Black'}/>
    </div>
  );
}

export default App;
