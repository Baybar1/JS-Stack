import {useState} from 'react'
import './App.css';
import { Tabs } from './components/Tabs';
import { Content } from './components/Content';

function App() {
  const [tab,setTab] = useState('');
  const newArray = [
    {tabNum : 'Tab 1', content: 'Tab 1 content'},
    {tabNum : 'Tab 2', content: 'Tab 2 content'},
    {tabNum : 'Tab 3', content: 'Tab 3 content'}
  ]
  const [newTab,setNewTab] = useState(newArray)
  return (
    <div className="App">
      <Tabs tab = {tab} setTab = {setTab} newTab = {newTab}/>
      <Content tab = {tab}  newTab = {newTab}/>
    </div>
  );
}

export default App;
