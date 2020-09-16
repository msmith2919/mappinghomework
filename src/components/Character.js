import React from 'react';


function Character(props){

    const [name]=React.useState(props.name);
    const [age]=React.useState(props.age);
    const [power]=React.useState(props.power);
    const [color]=React.useState(props.color);
    const [moves]=React.useState(props.moves);
    const [items]=React.useState(["myThing1", "myThing2", "myThing3"])

    const [toggle, setToggle] = React.useState("");


    const thingEles = items.map((it, idx)=>
        <h3 key={idx}>{it}</h3>
    );


    return(
        <div
            className={"character"}
            style={{backgroundColor: color, minHeight: "100px", maxWidth: "200px"}}
            onClick={()=>setToggle("*clicked*")}
        >
            <h1>Name: {name}</h1>
            <h2>Superpower: {power}</h2>
            {props.age> 50?<h3>I am too old</h3>:<h3>Age: {age}</h3>}
            <h3>Special Moves: {moves}</h3>
            {toggle==="*clicked*"?<h3>My Power is: {power}</h3>:<h3> </h3>}
            <p>My Array: {thingEles}</p>
        </div>
    )
}

export default Character;