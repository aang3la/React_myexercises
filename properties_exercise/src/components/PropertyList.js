import Property from "./Property";

export default function PropertyList({ properties }) {
    return(
        <div className="PropertyList">
            {properties.map(p => {
                return <Property {...p} key={p.id} /> 
                // with spread operator we pass all the properties
                //the same is: name={p.name} price={p.price} ..etc
            })}
        </div>
    )
}