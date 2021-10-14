import './App.css';
import Resistor from "./component/Resistor";
import {useState} from "react";

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
    <button>Serienschaltung</button>
      <button>Paralellschaltung</button>
    </div>
  );
}

export default App;
