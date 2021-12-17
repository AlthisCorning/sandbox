import React from "react";

export default function Trunks(props) {
    return (
        <div>
            <h3>Edge8 Trunk Configurator</h3>
            <button value="back" onClick={(e) => (props.backFunction(e.target.value))}>Back</button>            
        </div>
            
    )
}