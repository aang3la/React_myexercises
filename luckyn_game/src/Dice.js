import { Die } from "./Die";

// Shows a set of dice
export const Dice = ({ dice }) => {
    return (
        <section className="Dice">
            {dice.map((v, i) => {
                return <Die key={i} val={v} />
            })}
        </section>
    )
};