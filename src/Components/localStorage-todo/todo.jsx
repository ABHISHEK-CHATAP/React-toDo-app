import React, { useEffect, useRef, useState } from 'react'
import "./todo.css"


const getLocalData = () => {
    const list = localStorage.getItem("To-Do-list");

    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};



const Todo = () => {
    const [input, setInput] = useState('')
    const [tableData, setTableData] = useState(getLocalData());
    const [editIndex, setEditIndex] = useState("")
    const [toggleButton, settoggleButton] = useState(false);

    const AddTodo = (input) => {
        if (!input) {
            alert("write something..")
        }
        else if (input && toggleButton) {
            //    Object.assign(tableData[editIndex],input);

            setTableData( tableData.map((cur, index) => {
                    if (index === editIndex) {
                        return ([input])
                    }
                    return cur
                })
            );
            setInput("");
            settoggleButton(false);
        }
        else {
            setTableData([...tableData, input])
            setInput("")
        }
    }



    const Delete = (id) => {
        setTableData(tableData.filter((x, idx) => idx !== id))
    }


    const Edit = (id) => {
        //  Another method for finding edit id
        const item_todo_edited = tableData.find((cueEle, idx) => {
            return idx === id;
        })
        setInput(item_todo_edited)
        // console.log(item_todo_edited);
        // -------------------------------------------------------------
        // const temp = tableData[id];
        // setInput([temp]);

        settoggleButton(true);
        setEditIndex(id);
    }

   
    // Adding Local-Storage
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus();
        
        localStorage.setItem("To-Do-list", JSON.stringify(tableData))
    }, [tableData])
    // jb bhi 'tableData' ki value change hogi tohi useEffect dobara chalega



    return (
        <>
            <div className='main-heading'>
                <h1 className='tc'>🎉  All PRACTICE TASK'S HERE  🎇</h1>
            </div>

            <div className='local-todo'>
                <br />    <br />
                <h1 className='num-one'> 1st : -   LocalStorage To-Do App</h1>
                <br />

                <div >
                    <br />
                    <span className='input-add'>
                        <input className='input' name='input' value={input} ref={inputRef} placeholder='✍ Enter Here..' onChange={(e) => setInput(e.target.value)} />
                        <button className='btn btnn' onClick={() => AddTodo(input)}>{toggleButton ? "✍" : "➕"}</button>
                    </span>
                </div>
                <br />
                {
                    tableData.map((ele, id) => {
                        return (
                            <div className='list-data' key={id}>
                                <span id='listt'>
                                    {ele}
                                    <span>
                                        <button className='click' onClick={() => Edit(id)}>📝</button>
                                        <button className='click' onClick={() => Delete(id)}>✖</button>
                                    </span>
                                </span>
                            </div>
                        )
                    })
                }

                <hr />
                <button className='clear-button' onClick={() => setTableData([])}><b>Clear All</b></button>

                <br /> <br /> <br />
            </div>
        </>
    )
}

export default Todo