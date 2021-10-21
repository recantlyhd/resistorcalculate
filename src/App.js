import './App.css';
import Resistor from "./component/Resistor";
import Serialconnection from "./component/Serialconnection";
import {useState} from "react";
import Parallelconnection from "./component/Parallelconnection";

function App() {
  const [value1, changeValue1] = useState(0);
  const [value2, changeValue2] = useState(0);
  const [value3, changeValue3] = useState(0);
  const [sResistorValue, changeSResistorValue] = useState(0);
  const [pResistorValue, changePResistorValue] = useState(0);


    function calculateResistorSerial() {
      const res = value1 + value2 + value3;
    changeSResistorValue(res);
    return (
        <div>
            {sResistorValue}
        </div>
    );
  }
    function calculateResistorParallel() {
      const res = (value1 * value2 * value3)/(value1 + value2 + value3);
        changePResistorValue(res);
      return(
          <div>
              {pResistorValue}
          </div>
      )
    }

  return (
      <div className="App">
        <h1>Widerstandsberechnung</h1>
        <Resistor title="R1" handleInput={(value) => changeValue1(parseInt(value))}/>
        <Resistor title="R2" handleInput={(value) => changeValue2(parseInt(value))}/>
        <Resistor title="R3" handleInput={(value) => changeValue3(parseInt(value))}/>
          <Serialconnection onClick = {calculateResistorSerial} result = {sResistorValue}/>
          <Parallelconnection onClick = {calculateResistorParallel} result = {pResistorValue}/>
      </div>
  );
}

export default App;
