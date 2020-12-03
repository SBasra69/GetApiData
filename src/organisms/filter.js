import React from "react";


const Filter = (props) => {
    
    return (
        <>
        <input type="text" placeholder="Search" value={props.searchTerm} onChange={props.changeHandle} />
        </>
    );
}


export default Filter;