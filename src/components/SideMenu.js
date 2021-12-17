import React, { Component, useState } from "react";
import TagDisplay from "./TagDisplay";
import FilterMenu from "./FilterMenu";
import MenuSelector from "./MenuSelector";
import TextMenu from "./TextMenu";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function SideMenu(props){
        const [mode, setMode] = useState('filter')
        const [filterSearch, setFilterSearch] = useState(null);
        const [textSearch, setTextSearch] = useState("Type your tender bits here");
        const [tokens, setTokens] = useState([])
        const [tokenHits, setTokenHits] = useState([]);

    function switchMode(){
        if(mode === "filter"){
            setMode("text");
        }else{
            setMode("filter");
        }
    }

    function updateFilterSearch(value){
        setFilterSearch(value);
    }

    function updateTextSearch(newText){
        setTextSearch(newText)
    }

    function searchText(){
        //something weird is going on with this regex creating empty strings.
        const queryText = textSearch.toLowerCase().split(/[^'\w]/).filter(token => token !== '');
        setTokens(queryText);
        let hits = [];
        queryText.forEach((token) => {
            if (props.mappings.hasOwnProperty(token)){
                hits.push(props.mappings[token].value);
            }
        })
        setTokenHits(hits);
        props.tagUpdateFunction(hits);
    }

    let activeMenu;
    if (mode === "filter"){
        activeMenu = <FilterMenu filterSearch={filterSearch}
                                updateSearch={updateFilterSearch}
                                activeFilters={props.activeTags}
                                addFunction={props.addTagFunction}
                                removeFunction={props.removeTagByNameFunction}/>;
    }else{
        activeMenu = <TextMenu currentText={textSearch}
                                updateSearch={updateTextSearch}
                                searchFunction={searchText}
                                currentTokens={tokens}
                                tokenHits={tokenHits}
                                />;
    }

    return(
        <Container>
            <Row>
                <TagDisplay tags={props.activeTags} removeTag={props.removeTagByNameFunction}></TagDisplay>
            </Row>
            <Row>
                <Button onClick={props.openGuideFunction}> Product Guide </Button>
            </Row>
            <Row>
                <MenuSelector mode={mode} switch={switchMode} option1='text' option2='filter' option1text="Text Search" option2text="Filter Search"/>
            </Row>
            <Row>
                {activeMenu}
            </Row>
        </Container>)
}