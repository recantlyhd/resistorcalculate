import logo from './logo.svg';
import './App.css';
import Resistor from "./component/Resistor";

function App() {
  return (
    <div className="App">
    <h1>Widerstandsberechnung</h1>
      <Resistor title = "R1"/>
      <Resistor title = "R2"/>
      <Resistor title = "R3"/>
    </div>
  );
}

export default App;
