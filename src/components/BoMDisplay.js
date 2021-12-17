import React from "react";
import BoMListing from './BoMListing';

export default function BoMDisplay(props) {
    let currentProducts = props.currentBoM;

    function buildBoM(){
        if (!currentProducts === []){
            return <h3>Nothing here yet!</h3>
        }else{
            return (
                <div>
                <ul>
                    {currentProducts.map((product) => {
                        return (
                            <li>
                                <BoMListing product={product}/>
                            </li>
                                )
                            }
                        )
                    }
                </ul>
                </div>
            )
        }
    }

    return (    
        <div>
        <h1>Bill of Materials</h1>
        <hr></hr>
            <div>
                {buildBoM()}
            </div>
        </div>
    )

}