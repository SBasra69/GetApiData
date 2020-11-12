import React from 'react';
import Employee from '../components/employee';

function Employees(props) {
        
    return (
      <div>
        <h1>Employee Data</h1> 
        {props.result.length >0 && props.result.map((c, data) => (
          <div key={data}>
              <>         
              <Employee emp={c}/>
                <hr />
              </>            
          </div>
        ))}
      </div>
    );
  }

export default Employees;