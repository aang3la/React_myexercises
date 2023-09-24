import { ColorBox } from "./ColorBox"

export const ColorBoxGrid = ({ colors }) => {
    const boxes = [];

    for(let i = 0; i < 25; i++) {
        boxes.push(<ColorBox colors={colors} />);
    }

    return <div className="ColorBoxGrid">{boxes}</div>
}