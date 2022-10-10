import './App.css';
import { Header } from './components/Views/Header';
import { Navigation } from './components/Views/Navigation';
import { Main } from './components/Views/Main';


function App() {
  return (
    <div style={{

      backgroundColor: '#DDDDDD',
      maxWidth: '1200px',
      height: '800px',
      margin: '0 auto',
      padding: '20px 0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '2px solid black'

      }} className="App">
      <Header />
      <div style={{
        display: 'flex',
        width: '90%',
        height: '70%',
        justifyContent: 'space-between'
      }}>
        <Navigation  />
        <Main />
      </div>
    </div>
  );
}

export default App;
