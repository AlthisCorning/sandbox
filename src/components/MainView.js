import React, { Component, useState } from 'react';
import MenuSelector from './MenuSelector';
import CatalogDisplay from './CatalogDisplay';
import BoMDisplay from './BoMDisplay';

export default function MainView(props){
    const [mode, setMode] = useState('catalog');

    let currentView;
    if (mode === "bom"){
        currentView = <BoMDisplay currentBoM={props.currentBoM}/>;
    }else{
        currentView = <CatalogDisplay activeProducts={props.activeProducts} addToBoMFunction={props.addToBoMFunction}/>
    }

    function modeSwitch(){
        if (mode == 'bom'){
            setMode('catalog')
        }else{
            setMode('bom')
        }
    }

    return(
        <div>
            <MenuSelector switch={modeSwitch}
                            mode={mode}
                            option1={"catalog"}
                            option2={"bom"}
                            option1text={"eCatalog"}
                            option2text={"Bill of Materials"}/>
            <hr></hr>
            {currentView}
        </div>
    )
}