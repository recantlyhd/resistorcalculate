import {useState} from "react";

function Resistor(props) {
    return (
        <div>
        <label>
            {props.title}:
    <input type = "number" onChange={props.handleInput}/>
    </label>
    </div>
    );
}
export default Resistor;