import { useState } from "react";

export const ScoreKeeper = ({ numPlayers = 4, target = 5}) => {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    const incrementScore = (index) => {
        setScores(prevScores => {
            const copy = [...prevScores];
            copy[index] += 1;
            return copy;
        })
    };

    const reset = () => {
        //same as the beggining, all goes to 0
        setScores(new Array(numPlayers).fill(0))
    }

    return(
        <div>
            <h1>Score keeper</h1>
            <ul>
                {scores.map((score, index) => {
                    return <li key={index}>Player {index + 1}: {score}
                    <button onClick={() => incrementScore(index)}>+1</button>
                    {score >= target && "Winner!"}
                    </li>
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}