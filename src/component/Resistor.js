import {useState} from "react";

function Resistor(props) {
    return (
        <div>
        <label>
            {props.title}:
            <input type = "number" onChange={(e) => props.handleInput(e.target.value)}/>
        </label>
    </div>
    );
}
export default Resistor;