// brings in react useState code
import { useState } from "react";

// sets up useState, what variable, what function changes it, and what start value
const Home = () => {
  const [name, setName] = useState('Lex');

// functino actually making dynamic change
let handleClick = () => {
  setName('Sasha');
}
  return (
    <div>
      <h1>Hello World</h1>
      {name} <br /> <br />
      <button onClick={handleClick}>Update Name</button>
    </div>
  );
}

export default Home;