import React from 'react';
import Employee from './Employee';
import PropTypes from 'prop-types'

const List = ({ employees }) => {
  const displayEmployees = (employees) ?
    (
      <div>
        <h3>Our Employees</h3>
        <hr />
        <div className="row">=
          {
            employees.map
              (
              (emp, id) => (
                <Employee key={id} details={emp}></Employee>
              )
              )
          }s
        </div>
      </div>
    ) :
    (
      <span>no employees</span>
    )

  return (
    <div>
      {displayEmployees}
    </div>
  )
}

List.propTypes = {
  employees: PropTypes.array
}

export default List