import React, { useState } from 'react'
import "./EMS.css"
import Add from "./Add"
import Edit from "./Edit.jsx"
import Header from "./Header"

import List from "./List"

import data from "./Data"






const EMS = () => {
    const [employee, setEmployee] = useState(data);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEdditing] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(false);

    const handleEdit = (idx) => {
        console.log(idx);
        setIsEdditing(true)
    }

    const handleDelete = (idx) => {
        setEmployee(employee.filter((x, id) => id !== idx))
    }

    return (
        <>
            <div className='EMS'>
                <br /><br></br>
                <h1 className='num-one'> 4th : -   EMPLOYEE MANAGEMENT SYSTEM</h1>
                <br />

                <div className='containerr'>

                    {/* list  */}
                    {!isAdding && !isEditing && (
                        <>
                            <Header setIsAdding={setIsAdding} />
                            <List
                                employee={employee}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />

                        </>
                    )}

                    {/* ADD  */}
                    {isAdding && (
                        <Add
                            employee={employee}
                            setEmployee={setEmployee}
                            setIsAdding={setIsAdding} />
                    )}

                    {/* Edit */}
                    {isEditing && (
                        <Edit
                            employees={employee}
                            setSelectedEmployee={setSelectedEmployee}
                            setEmployee={setEmployee}
                            setIsEdditing={setIsEdditing} />
                    )}
                </div>
                <br />    <br />
            </div>
        </>
    )
}

export default EMS