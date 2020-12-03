import React from 'react';

const Employee = (props) => {  
          
    return (
        <>
        <td>{props.emp.id}</td>
        <td>{props.emp.employee_name}</td>
        <td>{props.emp.employee_salary}</td>
        <td>{props.emp.employee_age} </td>
        </>
    )        
}

export default Employee;