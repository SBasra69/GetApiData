import React from "react";

const FilterBy = (props) => {   
    return (
          <select value={props.orderBy} onChange={props.changeDir}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>   
    );
}

export default FilterBy;