import './App.css';
import {Add} from './components/Add.js'

import {useState} from 'react';

function App() {

const [listItem,setListItem] = useState([]);

const newList = (newListItem) => {
  setListItem(newListItem);
}

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Add listItem ={listItem} onNewList={newList} setListItem = {setListItem}/>
    </div>
  );
}

export default App;
