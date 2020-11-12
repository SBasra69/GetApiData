import React from 'react';
import Paragraph from '../atoms/p';
import Header from '../atoms/h';

const Employee = (props) => {  
          
    return (
        <div>
            <Header title={props.emp.id} text="id: "/>
            <Paragraph value={props.emp.employee_name} text="Name: "/>
            <Paragraph value={props.emp.employee_salary} text="Salary: "/>
            <Paragraph value={props.emp.employee_age} text="Age: "/>
        </div>
    )        
}

export default Employee;