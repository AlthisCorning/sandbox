import React from "react";
import MenuSelector from "../../components/MenuSelector";

export default function Family(props){
    function switchToSolution(){
        props.switchFunction('solution')
    }

    return (
        <div>
            <MenuSelector switch={switchToSolution} mode='family' option1='solution' option2='family' option1text='Solution Guide' option2text='Family Guide'/>
            <button value="edge" onClick={(e) => (props.switchFunction(e.target.value))}>Edge</button>
            <button value="edge8" onClick={(e) => (props.switchFunction(e.target.value))}>Edge8</button>
            <button value="plugnplay" onClick={(e) => (props.switchFunction(e.target.value))}>Plug&Play</button>
        </div>
    )
}