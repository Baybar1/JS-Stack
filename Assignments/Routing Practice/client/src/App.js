import './App.css';
import styles from './components/StyleThemAll.module.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/Home';
import { Hello } from './components/Hello';
import { Number } from './components/Number';
import { HelloColor } from './components/HelloColor';



function App() {
  return (
    
    <BrowserRouter>
    <nav className= {styles.nav}>
      <Link to = '/'>Home</Link>
      <Link to ='/hello'>Hello</Link>
      <Link to ='/4'>Number</Link>
      <Link to = '/hello/blue/red'>Hello with color</Link>
    </nav>
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/hello' element = {<Hello />} />
        <Route path ='/4' element = {<Number />} />
        <Route path = '/hello/blue/red' element ={<HelloColor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
