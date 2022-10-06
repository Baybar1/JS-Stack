import { State } from './components/State';
import './App.css';

function App() {
  return (
    <div className="App">
      <State lastName =  {'Doe'} firstName = {'Jane'} age = {45} hairColor = {'Black'} />
      <State lastName =  {'Smith'} firstName = {'John'} age = {88} hairColor = {'Brown'} />
    </div>
  );
}

export default App;
