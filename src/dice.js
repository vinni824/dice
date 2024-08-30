// src/Dice.js
import React, { useState } from 'react';

const Dice = () => {
    const [dice, setDice] = useState([1, 1]);
    const [tripleDice, setTripleDice] = useState([1, 1, 1]);
    const [win, setWin] = useState(false);
    const [tripleWin, setTripleWin] = useState(false);

    const rollDice = () => {
        const newDice = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
        ];
        setDice(newDice);
        if (newDice[0] + newDice[1] < 4) {
            setWin(true);
        } else {
            setWin(false);
        }
    };

    const rollTripleDice = () => {
        const newTripleDice = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
        ];
        setTripleDice(newTripleDice);
        if (
            newTripleDice[0] === newTripleDice[1] &&
            newTripleDice[1] === newTripleDice[2]
        ) {
            setTripleWin(true);
        } else {
            setTripleWin(false);
        }
    };

    const diceStyle = {
        display: 'inline-block',
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        lineHeight: '100px',
        fontSize: '2rem',
        margin: '0 10px',
        borderRadius: '10px',
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* Section for rolling two dice */}
            <div>
                <h1>
                    Roll Less Than 4{' '}
                    {win && <span style={{ color: 'green' }}>You Win!</span>}
                </h1>
                <div style={{ marginBottom: '20px' }}>
                    <div style={diceStyle}>{dice[0]}</div>
                    <div style={diceStyle}>{dice[1]}</div>
                </div>
                <button onClick={rollDice} style={{ padding: '10px 20px' }}>
                    Roll
                </button>
            </div>

            {/* Section for rolling three dice */}
            <div style={{ marginTop: '50px' }}>
                <h2>
                    Roll The Same Number{' '}
                    {tripleWin && <span style={{ color: 'green' }}>You Win!</span>}
                </h2>
                <div style={{ marginBottom: '20px' }}>
                    <div style={diceStyle}>{tripleDice[0]}</div>
                    <div style={diceStyle}>{tripleDice[1]}</div>
                    <div style={diceStyle}>{tripleDice[2]}</div>
                </div>
                <button onClick={rollTripleDice} style={{ padding: '10px 20px' }}>
                    Roll
                </button>
            </div>
        </div>
    );
};

export default Dice;