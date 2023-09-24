import { useState } from 'react';

export const ColorBox = ({ colors }) => {
    const [color, setColor] = useState(randomChoice(colors));

    function randomChoice(arr) {
        const idx = Math.floor(Math.random() * arr.length);
        return arr[idx];
    }

    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    }

    return(
        <div className="ColorBox" 
        onClick={changeColor}
        style={{ backgroundColor: color }}></div>
    )
}