import React from 'react';
import Employee from '../components/employee';

function Employees(props) {
    const {onSort=() => {},result} = props;

    return (
      <div>
        <h1>Employee Data</h1> 
        <table>  
          <tr >
            <th>Id</th>
            <th onClick={e => onSort('Name') }>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
          {result.length >0 && result.map((c, data) => (
            <tr key={data}>
              <Employee emp={c} />
            </tr>
          ))}
        </table>
      </div>
    );
  }

export default Employees;