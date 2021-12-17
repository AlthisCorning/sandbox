import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function MenuSelector(props){
    if(props.mode === props.option2){
        return(
            <Container fluid>
                <Button onClick={props.switch} active>{props.option1text}</Button>
                <Button onClick={props.switch} disabled>{props.option2text}</Button>
            </Container>) 
    }else if (props.mode === props.option1){
        return(
            <Container fluid>
                <Button onClick={props.switch} disabled>{props.option1text}</Button>
                <Button onClick={props.switch} active>{props.option2text}</Button>
            </Container>) 
    }
}