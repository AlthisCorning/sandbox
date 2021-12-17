import React from "react";

export default function Harnesses(props) {
    return (
        <div>
            <h3>Edge8 Harness Configurator</h3>
            <button value="back" onClick={(e) => (props.backFunction(e.target.value))}>Back</button>            
        </div>
            
    )
}