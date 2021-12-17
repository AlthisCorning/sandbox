import React from "react";

export default function TextMenu(props){
    let tokenDisplay
    if (!props.currentTokens){
        tokenDisplay = null;
    }else{
        tokenDisplay = 
                        <div>
                            <h4>Captured tokens</h4>
                            <hr></hr>
                            <ul>
                                {props.currentTokens.map((name) => {
                                    return (
                                        <li>{name}</li>
                                    )
                                })}
                            </ul>
                            <hr></hr>
                        </div>
                          
    }
    let hitsDisplay;
    if (!props.tokenHits){
        hitsDisplay = null;
    }else{
        hitsDisplay = 
                        <div>
                            <h4>Filters Added</h4>
                            <hr></hr>
                            <ul>
                                {props.tokenHits.map((name) => {
                                    return (
                                        <li>{name}</li>
                                    )
                                })}
                            </ul>
                            <hr></hr>
                        </div>
    }

    function onTextSearchChange(event){
        props.updateSearch(event.target.value);
    }

    return(
        <div>
            <div>
                <input type="text" value={props.currentText} onChange={onTextSearchChange}/>
                <button onClick={props.searchFunction}>Search!</button>
            </div>
            <hr></hr>
            <div>
                {tokenDisplay}
                {hitsDisplay}
            </div>
        </div>
    );
}