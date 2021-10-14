import './App.css';
import Resistor from "./component/Resistor";
import Serialconnection from "./component/Serialconnection";
import {useState} from "react";
import Parallelconnection from "./component/Parallelconnection";

function App() {
  const [value1, changeValue1] = useState(0);
  const [value2, changeValue2] = useState(0);
  const [value3, changeValue3] = useState(0);
  return (
    <div className="App">
    <h1>Widerstandsberechnung</h1>
      <Resistor title = "R1" handleInput ={(value) => changeValue1(value)}/>
      <Resistor title = "R2" handleInput ={(value) => changeValue2(value)}/>
      <Resistor title = "R3" handleInput ={(value) => changeValue3(value)}/>
    <Serialconnection/>
    <Parallelconnection/>
    </div>
  );
}

export default App;
