import React from "react";
import DynamicSearchBox from './DynamicSearchBox';
import { getFilters } from "../contents/data";

export default function FilterMenu(props){
    function onFilterSearchChange(newSearchValue){
        props.updateSearch(newSearchValue);
    }

    function checkmarkUpdate(event) {
        if (event.target.checked) {
            props.addFunction(event.target.value.toLowerCase());
        } else {
            props.removeFunction(event.target.value.toLowerCase());
        }
    }

    return(
            <div>
                <DynamicSearchBox searchValue={props.filterSearch} onSearchChange={onFilterSearchChange}/>
                {getFilters()
                .filter(filterCategory => {
                    let filterSearch = props.filterSearch;
                    if (!filterSearch) return true;
                    let categoryName = filterCategory.filterName.toLowerCase();
                    return categoryName.startsWith(filterSearch.toLowerCase());
                })
                .map(filterCategory => (
                    <div>
                        <h4>{filterCategory.filterName}</h4>
                        {filterCategory.children.map(option => {
                            return (
                                <div>
                                    <input type='checkbox' value={option} checked={props.activeFilters.includes(option.toLowerCase())}
                                    onChange={(e) => checkmarkUpdate(e)}/>
                                    <label for={option}>{option}</label>
                                </div>);
                        })}
                    </div>
                ))}
            </div>
            );
    }