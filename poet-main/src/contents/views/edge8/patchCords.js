import React from "react";

export default function PatchCords(props) {
    return (
        <div>
            <h3>Edge8 Patch Cord Configurator</h3>
            <button value="back" onClick={(e) => (props.backFunction(e.target.value))}>Back</button>            
        </div>
            
    )
}