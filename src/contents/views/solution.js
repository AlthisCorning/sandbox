import React from "react";
import image from '../img/rickroll.jpg';
import MenuSelector from "../../components/MenuSelector";

export default function Solution(props){
    function switchToFamily(){
        props.switchFunction('family')
    }

    return (
        <div>
            <MenuSelector switch={switchToFamily} mode='solution' option1='solution' option2='family' option1text='Solution Guide' option2text='Family Guide'/>
            <img src={image} usemap="#mapper" width={350} height={175}/>
            <map name="mapper">
                <area shape="rect" alt='head/edge' coords='108,1,182,77' href="" onClick={(e)=> {
                                                                            e.preventDefault();
                                                                            props.switchFunction('edge');
                                                                            return false;    
                                                                            }}/>
                <area shape="rect" alt='hand/edge8' coords='220,170,176,135' href="" onClick={(e)=> {
                                                                            e.preventDefault();
                                                                            props.switchFunction('edge8');
                                                                            return false;    
                                                                            }}/>
                <area shape="rect" alt='mic/plugnplay' coords='156,79,185,107' href="" onClick={(e)=> {
                                                                            e.preventDefault();
                                                                            props.switchFunction('plugnplay');
                                                                            return false;    
                                                                            }}/>
            </map>
        </div>
    )
}