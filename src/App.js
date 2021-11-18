import './App.css';
import Resistor from "./component/Resistor";
import Serialconnection from "./component/Serialconnection";
import {useState} from "react";
import Parallelconnection from "./component/Parallelconnection";
import CreateTable from "./component/CreateTable";

function App() {
    const [value1, changeValue1] = useState(0);
    const [value2, changeValue2] = useState(0);
    const [value3, changeValue3] = useState(0);
    const [sResistorValue, changeSResistorValue] = useState(0);
    const [pResistorValue, changePResistorValue] = useState(0);
    const [pResult, pSetResult] = useState(0);
    const [sResult, sSetResult] = useState(0);
    const [result, setResult] = useState(0);
    const [newResult, setNewResult] = useState(0);


    function calculateParallelVolt(){
        const ohm = newResult;
        let res = {};
        for(let i = 1; i<=10;i++){
            res[i] = calculateV(i,ohm);
        }
        setResult(res);
    }
    function calculateSerialVolt(){
        const ohm = newResult;
        console.log("sResisorValue in calculate" + sResistorValue);
        console.log("ohm in calculate"+ ohm);
        let res = {};
        for(let i = 1; i<=10;i++){
            res[i] = calculateV(i,ohm);
        }
        setResult(res);
    }
    function calculateV(volts, ohm){
        console.log("volts"+volts);
        console.log("ohm"+ohm);
        return (volts/ohm);
    }
    function calculateResistorSerial() {
        const res = value1 + value2 + value3;
        setNewResult(res);
    }
    function calculateResistorParallel() {
        const res = (value1 * value2 * value3) / (value1 + value2 + value3);
        setNewResult(res);
    }

    return (
        <div className="App">
            <h1>Widerstandsberechnung</h1>
            <Resistor title="R1" handleInput={(value) => changeValue1(parseInt(value))}/>
            <Resistor title="R2" handleInput={(value) => changeValue2(parseInt(value))}/>
            <Resistor title="R3" handleInput={(value) => changeValue3(parseInt(value))}/>
                <Serialconnection className = 'app-button' onSubmit={function (){calculateResistorSerial(); calculateSerialVolt();}}/>
                <Parallelconnection className = 'app-button' onSubmit={function(){calculateResistorParallel(); calculateParallelVolt();}}/>
                <CreateTable className = 'app-button' result = {newResult} tableValue = {result}/>
        </div>
    );
}

export default App;
