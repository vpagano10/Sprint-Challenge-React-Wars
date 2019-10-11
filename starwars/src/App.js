import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const Page = styled.div`
  text-align: center;
`;
const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2% 0% 2% 3%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data.results);
            setPeople(response.data.results);
        })
        .catch(error => {
            console.log('data not returned', error)
        });
}, []);

  return (
    <>
      <Page>
        <Header>React Wars</Header>
        {/* <CharacterCard 
        name={people.name}
        gender={people.gender}
        eyeColor={people.eye_color}
        hairColor={people.hair_color}
        height={people.height}
        weight={people.mass}
        /> */}
      </Page>
      <Cards>
        {people.map((person, index) => {
          return (
            <CharacterCard
            key={index}
            name={person.name}
            gender={person.gender}
            eyeColor={person.eye_color}
            hairColor={person.hair_color}
            height={person.height}
            weight={person.mass}
            />
          )
        })}
      </Cards>
    </>
  );
}

export default App;
