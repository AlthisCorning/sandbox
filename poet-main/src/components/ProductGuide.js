import React, { Component, Suspense, lazy, useState } from "react";
import data from "../contents/data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function ProductGuide(props){
    const [page, switchPage] = useState("solution");
    const [previousPage, updatePreviousPage] = useState([]);

//Main Separators
    function switchStart(newMode){
        //newmode is always only 'solution' or 'family'
        updatePreviousPage([...previousPage, page]);
        switchPage(newMode);
    }

//Product Families
    function route(newPath){
        updatePreviousPage([...previousPage, page]);
        switchPage(page+'/'+newPath);
    }

    function back(){
        console.log(previousPage);
        console.log(page);
        switchPage(previousPage[previousPage.length-1]);
        const newArray = previousPage.slice(0,-1);
        updatePreviousPage(newArray);
    }

    const CurrentPage = lazy(()=> import(`../contents/views/${page}`));
    
    return (
        <Container>
            <Row>
                <Suspense fallback={<div>Loading...</div>}>
                    <CurrentPage switchFunction={switchStart} linkFunction={route} backFunction={back}/>
                </Suspense>
            </Row>
            <Row>
                <Button onClick={props.closeFunction}>Close</Button>
            </Row>
        </Container>
    )
}