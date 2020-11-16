
const GetEmployees = async () => {
    return await fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json() )
        .then(res => res.data )      
}

export default GetEmployees;