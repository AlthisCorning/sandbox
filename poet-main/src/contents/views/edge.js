import React from "react";

export default function edgeView(props){
    return (
        <div>
            <button value="trunks" onClick={(e) => (props.linkFunction(e.target.value))}>Trunks</button>
            <button value="modules" onClick={(e) => (props.linkFunction(e.target.value))}>Modules</button>
            <button value="hanesses" onClick={(e) => (props.linkFunction(e.target.value))}>Harnesses</button>
            <button value="patchCords" onClick={(e) => (props.linkFunction(e.target.value))}>Patch Cords</button>            
            <button value="back" onClick={(e) => (props.backFunction(e.target.value))}>Back</button>
        </div>
    )
}