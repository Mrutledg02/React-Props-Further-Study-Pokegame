import Pokecard from './Pokecard';
import './Pokedex.css';

export default function Pokedex({ title = "Pokedex", pokemon = [], totalExp = 0, isWinner = false }) {
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">{title}</h2>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard 
            key={p.id} 
            id={p.id} 
            name={p.name} 
            type={p.type} Her
            base_experience={p.base_experience} />
        ))}
      </div>
      <p>Total EXP: {totalExp}</p>
      {isWinner && <p className="Pokedex-winner">THIS HAND WINS!</p>}
    </div>
  );
}
