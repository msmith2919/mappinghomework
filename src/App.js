import React from 'react';
import Character from "./components/Character";

function App() {

  const [boxInfo]=React.useState([{name:'Cinder', power: 'Fire', color: 'orange', age: 28, moves:["Trailblazer", "Inferno", "Fire Flash"]},{name:'Aganos', power: 'Rock', color: '#009999', age: 900000, moves:["Payload Assault", "Pulverize", "Ruin"]}, {name:'Jago', power: 'Tiger Spirit', color: '#336699', age: 25, moves:["Edokuken", "Tiger Fury", "Wind Kick"]}]);

  const boxEles = boxInfo.map((bx, idx)=>
      <Character name={bx.name} power={bx.power} age={bx.age} color={bx.color} moves={bx.moves} key={idx}/>
  );

  return (
      <div className="App">
        {boxEles}
      </div>
  );
}

export default App;
