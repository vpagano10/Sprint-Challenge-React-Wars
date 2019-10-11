import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
        .get('https://swapi.co/api/people/1/')
        .then(response => {
            console.log(response.data);
            setPeople(response.data);
        })
        .catch(error => {
            console.log('data not returned', error)
        });
}, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard 
      name={people.name}
      gender={people.gender}
      eyeColor={people.eye_color}
      hairColor={people.hair_color}
      height={people.height}
      weight={people.mass}
      />
    </div>
  );
}

export default App;
