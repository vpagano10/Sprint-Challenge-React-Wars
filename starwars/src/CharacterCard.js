import React from 'react';
import styled from 'styled-components';


const CardDisplay = styled.div`
    margin: 4%;
    padding: 2%;
    background: darkslategray;
    color: khaki;
    border: 2px solid khaki;
    width: 20%;
    &:hover {
        transform: scale(1.5);
        background-color: dimgrey;
        color: yellow;
    }
`;
const CharacterStats = styled.p`
    text-align: left;
`;
const CharacterName = styled.h2`
    color: yellow;
    font-weight: bold;
    text-align: center;
`;
const Categories = styled.big`
    color: coral;
`

const CharacterCard = props => {
    return (
        <>
            <CardDisplay key={props.id}>
                <CharacterName>{`${props.name}`}</CharacterName>
                <CharacterStats><Categories>Gender: </Categories>{`${props.gender}`}</CharacterStats>
                <CharacterStats><Categories>Eye-color: </Categories>{`${props.eyeColor}`}</CharacterStats>
                <CharacterStats><Categories>Hair-color: </Categories>{`${props.hairColor}`}</CharacterStats>
                <CharacterStats><Categories>Height: </Categories>{`${props.height}`}</CharacterStats>
                <CharacterStats><Categories>Weight: </Categories>{`${props.weight}`}</CharacterStats>
            </CardDisplay>
        </>
    );
}

export default CharacterCard;