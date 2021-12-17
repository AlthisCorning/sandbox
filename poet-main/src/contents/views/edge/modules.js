import React from "react";

export default function Modules(props) {
    return (
        <div>
            <h3>Edge Module Configurator</h3>
            <button value="back" onClick={(e) => (props.backFunction(e.target.value))}>Back</button>            
        </div>
            
    )
}