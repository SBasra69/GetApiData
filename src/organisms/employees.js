import React, { useCallback, useReducer } from 'react';
import Employee from '../components/employee';

const initColumnsState = {
  'id': {
    isAsc: true,
  },
  'employee_name': {
    isAsc: true,
  },
  'employee_salary': {
    isAsc: true,
  },
  'employee_age': {
    isAsc: true,
  },
}

const columnsReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_COLUMN_SORT_DIRECTION':
      return {
        ...state,
        [action.id]: {
          isAsc: !state[action.id].isAsc
        }
      };
    default:
      return state;
  }
};

function Employees(props) {
  const { onSort = () => { }, result } = props;
  const [column, dispatch] = useReducer(columnsReducer, initColumnsState);

  const handleSort = useCallback((id) => {
    onSort(id, column[id].isAsc);
    dispatch({ type: 'UPDATE_COLUMN_SORT_DIRECTION', id });
  }, [column, onSort]);

  return (
    <div>
      <h1>Employee Data</h1>
      <table>
        <tr >
          <th onClick={e => handleSort('id')}>Id</th>
          <th onClick={e => handleSort('employee_name')}>Name</th>
          <th onClick={e => handleSort('employee_salary')}>Salary</th>
          <th onClick={e => handleSort('employee_age')}>Age</th>
        </tr>
        {result.length > 0 && result.map((c, data) => (
          <tr key={data}>
            <Employee emp={c} />
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Employees;
