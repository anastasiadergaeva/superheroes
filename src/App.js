import Card from './components/Card'
import './App.css';
import heroes from './heroes.json'

export default function App() {
  const cardItem = heroes.map(hero =>
    <Card
      name={hero.name}
      universe={hero.universe}
      alterego={hero.alterego}
      occupation={hero.occupation}
      friends={hero.friends}
      superpowers={hero.superpowers}
      url={hero.url}
    />);
  return (
    <div className='App'>{cardItem}</div>
  );
}