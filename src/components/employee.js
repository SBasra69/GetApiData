import React from 'react';
import Paragraph from '../atoms/p';
import Header from '../atoms/h';

const Employee = (props) => {  
          
    return (
        <div>
            <Header title={props.emp.id} Text="id: "/>
            <Paragraph value={props.emp.employee_name} Text="Name: "/>
            <Paragraph value={props.emp.employee_salary} Text="Salary: "/>
            <Paragraph value={props.emp.employee_age} Text="Age: "/>
        </div>
    )        
}

export default Employee;