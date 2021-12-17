import React from "react";
import ProductDisplay from './ProductDisplay';

export default function CatalogDisplay(props) {
    let currentProducts = props.activeProducts;

    function buildCatalog(){
        if (!currentProducts){
            return <h3>Loading...</h3>
        }else{
            return (
                <div>
                <ul>
                    {currentProducts.map((product) => {
                        return (
                            <li>
                                <ProductDisplay product={product} addToBoMFunction={props.addToBoMFunction}/>
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
    return(
        <div>
            <h1>Catalog</h1>
            <hr></hr>
            <div>
                {buildCatalog()}
            </div>
        </div>
        )
}