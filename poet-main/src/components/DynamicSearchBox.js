import React, { Component } from "react";

class DynamicTextBox extends Component{
    constructor(props){
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event){
        this.props.onSearchChange(event.target.value);
    }

    render(){
        return(
            <input value={this.props.searchValue} onChange={this.changeHandler}></input>
        );
    }
}
export default DynamicTextBox;