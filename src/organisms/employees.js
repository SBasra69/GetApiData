import React from 'react';
import Employee from '../components/employee';

function Employees(props) {
        
    return (
      <div>
        <h1>Employee Data</h1> 
        <table>  
          <tr >
            <th>Id</a></th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
          {props.result.length >0 && props.result.map((c, data) => (
            <tr key={data}>
              <Employee emp={c} />
            </tr>
          ))}
        </table>
      </div>
    );
  }

export default Employees;