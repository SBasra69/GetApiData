<<<<<<< HEAD
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

=======
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

>>>>>>> 34f7e42a4f7cdcb437a0b57a81e72a1fdc6b8e67
export default Employee;