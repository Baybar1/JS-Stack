import { Boxes } from './components/Boxes';
import {BoxColors} from './components/BoxColors';
import './App.css';
import {useState} from 'react';

function App() {
  const [newColor, setNewColor] = useState([]);

  const newBoxColor = (newBox) => {
    setNewColor(newBox);
  }

  return (
    <div className="App">
      <Boxes newColor = {newColor} setNewColor = {setNewColor}onNewBox = {newBoxColor}/>
      <BoxColors  newColor = {newColor}/>
    </div>
  );
}

export default App;
