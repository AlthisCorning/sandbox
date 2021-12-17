import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function TagDisplay(props){
    if(!props.tags){
        return (
            <div>
            </div>
        )
    }else{
        return (
            <div style={{"margin":"4px", "padding": "3px", "border": "1px solid gray"}}>
                <Container fluid>
                    {props.tags.map((tag, index) => (
                        <Button onClick={() => props.removeTag(tag)}>{tag} X</Button>
                    ))}
                </Container>
            </div>)
    }
}

export default TagDisplay;