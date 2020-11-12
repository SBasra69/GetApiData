import React from "react";
import FilterBy from "../organisms/filterBy";
import FilterOrder from "../organisms/filterOrder";


const Filter = (props) => {
    
    return (
        <>
        <input type="text" placeholder="Search" value={props.searchTerm} onChange={props.changeHandle} />
        <FilterBy orderBy={props.orderBy} changeOrder={props.changeOrder}/>
        <FilterOrder orderDir={props.orderDir}  changeDir={props.changeDir}/>
        </>
    );
}


export default Filter;