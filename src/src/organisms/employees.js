<<<<<<< HEAD
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

=======
import React, {useEffect, useState} from 'react';
import Employee from '../components/employee';

function Employees() {
    const [employee, setEmployee] = useState([]);
    const [success, setSuccess] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sorted, setSorted] = useState(employee);
  
    useEffect(() => {
      fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(res => {
            setSuccess(res.status);
            setEmployee(res.data);
        })      
        .then(res => {           
          //employee.sort((a,b) => b.employee_salary - (a.employee_salary));          
          setSorted(employee.slice(0,5));
          setIsLoading(false);
        })      
    }, [employee]);
      
    return (
      <div>
        <h1>Employee Data</h1>
        {isLoading && <p>Loading Employees...</p>}
        {success!=="success" && <p>Failure is not a option</p>}
        {sorted.length === 0 && <p>No Employees!</p>}      
        {sorted.length >0 && sorted.map((c, data) => (
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

>>>>>>> 34f7e42a4f7cdcb437a0b57a81e72a1fdc6b8e67
export default Employees;