import React, { useEffect, useState } from 'react';
import Employees from '../organisms/employees';
import GetEmployees from '../api/employees';
import Filter from "../organisms/filter";

const Home = () => {
  const [employee, setEmployee] = useState([]);
  const [success, setSuccess] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("employee_name");
  const [orderDir, setOrderDir] = useState("asc");

  console.log(employee);
  useEffect(() => {
    setIsLoading(true);
    const fetchEmployees = async () => {
      setSuccess(false);
      const data = await GetEmployees();
      setEmployee(data);
      setSuccess(true);
      setIsLoading(true);
    }
    fetchEmployees()
  }, []);

  const handleSort = (columnName, sortDirectionAsc) => {
    const empSorted = employee.sort((a, b) => {
      if (sortDirectionAsc) {
        if (b[columnName] > a[columnName])
          return 1;
        if (b[columnName] < a[columnName])
          return -1;
      }
      else {
        if (b[columnName] < a[columnName])
          return 1;
        if (b[columnName] > a[columnName])
          return -1;
      }
      return 0;
    });
    console.log(empSorted);
    setEmployee(empSorted);
  }

  const handleChange = e => {
    setSearchTerm(e.target.value.trim());
  };

  const handleOrder = e => {
    setOrderBy(e.target.value.trim());
  }

  const handleDir = e => {
    setOrderDir(e.target.value.trim());
  }

  return (
    <header className="App-header">
      {isLoading && <p>Loading Employees...</p>}
      {success !== "success" && <p>Failure is not a option</p>}
      {employee.length === 0 && <p>No Employees!</p>}

      <Filter searchTerm={searchTerm}
        orderBy={orderBy}
        orderDir={orderDir}
        changeHandle={handleChange}
        changeOrder={handleOrder}
        changeDir={handleDir}
      />
      {searchTerm}
      {orderBy}
      {orderDir}
      <Employees result={employee} onSort={handleSort} />
    </header>
  )
}

export default Home;




        // fetch('http://dummy.restapiexample.com/api/v1/employees')
        //   .then(res => res.json())
        //   .then(res => {
        //       setSuccess(res.status);
        //       setEmployee(res.data);
        //   })      
        //   .then(res => {           
        //     let order;
        //     let filteredEmps = employee;
        //     if (orderDir === 'asc') {
        //       order = 1;
        //     } else {
        //       order = -1;
        //     }            

        //     filteredEmps = filteredEmps.sort((a, b) => {
        //     if (orderBy === 'id')
        //     {
        //       employee.sort((a,b) => b.id - a.id);
        //     }
        //     if (orderBy === 'salary')
        //     {
        //       employee.sort((a,b) => b.employee_salary - a.employee_salary);     
        //     }
        //     else
        //     {
        //       if (
        //         a[orderBy].toLowerCase() <
        //         b[orderBy].toLowerCase()
        //       ) {
        //         return -1 * order;
        //       } else {
        //         return 1 * order;
        //       }
        //     }
        //   })
        //     //setEmployee(filteredEmps);
        //   })
        //   .then(res => {           
        //     //employee.sort((a,b) => b.employee_salary - (a.employee_salary));          
        //     //setSorted(employee.slice(0,50));

        //    setSorted(employee.filter((res) => 
        //      res.employee_name.toLowerCase().includes(searchTerm)                         
        //   ));
        //     setIsLoading(false);
        //   })      
