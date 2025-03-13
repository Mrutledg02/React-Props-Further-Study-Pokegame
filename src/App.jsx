import Pokegame from './components/Pokegame';
import './App.css';

function App() {
  return (
    <div className="pokegame-title-container">
      <div className="pokegame-layered-text">
         <h1 className="pokegame-hollow">Pokegame</h1>
          <h1 className="pokegame-solid">Pokegame</h1>
      </div>
      <Pokegame />
    </div>
  );
}

export default App;