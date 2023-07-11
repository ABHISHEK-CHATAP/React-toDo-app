import React from 'react'

const List = ({ employee, handleEdit, handleDelete }) => {
  return (
    <>
      <table style={{ marginTop: 30, marginLeft: 40, width: '65rem' , backgroundColor:'gray',padding:20}}>
        <thead>
          <tr>
            <td><b>Sr.No</b></td>
            <td><b>FirstName</b></td>
            <td><b>LastName</b></td>
            <td><b>E-MAil</b></td>
            <td><b>Salary</b></td>
            <td><b>Date</b></td>
            <td colSpan={2}><b>Actions</b></td>
          </tr>
        </thead>
        <tbody>
          {employee.length > 0 ? (employee.map((emp, idx) => {
            return (
              <tr key={idx}>
                <td>{emp.id}</td>
                <td>{emp.FirstName}</td>
                <td>{emp.LastName}</td>
                <td>{emp.email}</td>
                <td>{emp.salary}</td>
                <td>{emp.date}</td>
                <td>
                  <button onClick={() => handleEdit(idx)}>EDIT</button>
                  <button onClick={() => handleDelete(idx)}>DELETE</button>
                </td>
              </tr>
            )
          })) : (
            <tr>
              <td colSpan={12} style={{ color: 'blue' }}><h1>NO EMPLOYEES...</h1></td>
            </tr>
          )

          }
        </tbody>
      </table>
      <br />  <br />  <br />
    </>
  )
}

export default List