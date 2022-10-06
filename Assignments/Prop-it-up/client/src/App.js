import { PersonCard } from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard lastName = {'Perez'} firstName = {'Ashley'} age = {26} hairColor = {'Black'} />
      <PersonCard lastName = {'Nunez'} firstName = {'Randy'} age = {35} hairColor = {'Brown'} />
      <PersonCard lastName = {'Peters'} firstName = {'Evan'} age = {49} hairColor = {'Blonde'} />
      <PersonCard lastName = {'Mills'} firstName = {'Joe'} age = {22} hairColor = {'Red'} />
    </div>
  );
}

export default App;
