import React, { useEffect, useRef, useState } from 'react'
import "./todo.css"

const Todo = () => {

    const [input, setInput] = useState('')
    const [tableData, setTableData] = useState([])

    const AddTodo = (input) => {
        if (!input) {
            alert("write something..")
        } else {
            setTableData([...tableData, input])
            setInput("")
        }
    }
    const Delete = (id) => {
        setTableData(tableData.filter((x, idx) => idx !== id))
    }
    const Edit = (id) => {
        const temp = tableData[id]
        setInput([temp])
    }

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <>
            <div className='main-heading'>
                <h1 className='tc'>All PRACTICE TASK'S HERE</h1>
            </div>

            <div className='local-todo'>
                <br />    <br />
                <h1 className='num-one'> 1st : -   LocalStorage To-Do App</h1>
                <br />

                <div >
                    <br />
                    <span className='input-add'>
                        <input className='input' ref={inputRef} placeholder='✍ Enter Here..' value={input} onChange={(e) => setInput(e.target.value)} />
                        <button className='btn btnn' onClick={() => AddTodo(input)}>➕</button>
                    </span>
                </div>
                <br />
                {
                    tableData.map((ele, id) => {
                        return (
                            <div className='list-data'>
                                <span id='listt'>{ele} <button className='click' onClick={() => Edit(id)}>📝</button>
                                    <button className='click' onClick={() => Delete(id)}>✖</button></span>
                            </div>
                        )
                    })
                }


                <br />
                <hr />
                <button className='clear-button' onClick={() => setTableData([])}><b>Clear All</b></button>

                <br /> <br /> <br />
            </div>
        </>
    )
}

export default Todo