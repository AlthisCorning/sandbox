import React from "react";
import image from '../contents/img/corn.png';
import Button from 'react-bootstrap/Button';

export default function ProductDisplay(props){
    if(!props.product){
        return (
            <div></div>
        )
    }else{
        return (
            <div style={{"display":"grid", "grid-template-columns": "1fr 7fr 1fr", "gridGap":"0px", "border":"2px solid black", "padding":"2px"}}>
                <div style={{'width':"20%", 'border':"1px"}}>
                    <img src={image} height={50} width={50}></img>
                </div>
                <div>
                    <h3>{props.product.name + " | " + props.product.partNumber}</h3>
                    <hr></hr>
                    <h6>{props.product.productFamily + " | " + props.product.productType}</h6>
                    <p>{props.product.description}</p>
                </div>
                <div>
                    <Button onClick={() => props.addToBoMFunction(props.product)}>Add to BOM</Button>
                </div>
            </div>
        )
    }
}