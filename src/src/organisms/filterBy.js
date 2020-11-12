import React from "react";

const FilterBy = (props) => {   
    return (
          <select value={props.orderBy} onChange={props.changeOrder}>
            <option value="employee_name">Name</option>
            <option value="employee_salary">Salary</option>
            <option value="employee_age">Age</option>
            <option value="id">id</option>
          </select>    
    );
}

export default FilterBy;