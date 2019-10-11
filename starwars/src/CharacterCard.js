import React from 'react';
import styled from 'styled-components';

const CardDisplay = styled.div`
    margin: 4%;
    padding: 2%;
    background: darkslategray;
    color: khaki;
    max-width: 25%;
`;
const CharacterStats = styled.p`
    text-align: left;
`;
const CharacterName = styled.h2`
    color: yellow;
    font-weight: bold;
`;
// const CardDisplay = styled.div`

// `;


const CharacterCard = props => {
    return (
        <>
            <CardDisplay key={props.id}>
                <CharacterName>{`${props.name}`}</CharacterName>
                <div>
                    <CharacterStats>{`Gender: ${props.gender}`}</CharacterStats>
                    <CharacterStats>{`Eye-color: ${props.eyeColor}`}</CharacterStats>
                    <CharacterStats>{`Hair-color: ${props.hairColor}`}</CharacterStats>
                    <CharacterStats>{`Height: ${props.height}`}</CharacterStats>
                    <CharacterStats>{`Weight: ${props.weight}`}</CharacterStats>
                </div>
            </CardDisplay>
        </>
    );
}

export default CharacterCard;