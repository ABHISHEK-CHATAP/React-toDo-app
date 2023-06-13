import React, { useState } from 'react'
import "../CRUD/Crud.css"

const Crud = () => {
    const [input, setInput] = useState({
        name: "",
        email: ""
    });
    const [tableData, setTabledata] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [editIndex, setEditIndex] = useState("");


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    // console.log(input);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input == ""){
            alert("please enter something...")
        }else{
                  
            if (editClick) {
                const tableTempData = tableData;
                const update = Object.assign(tableTempData[editIndex], input);
                setTabledata([...tableData])
                setInput({
                    name: "",
                    email: ""
                })
                setEditClick(false);
    
            } else {
                setTabledata([...tableData, input])
                setInput({
                    name: "",
                    email: ""
                })
            }
        }
       
    }
    const Edit = (idx) => {
        var tempData = tableData[idx];
        // console.log(tableData[idx])
        setInput({
            name: tempData.name,
            email: tempData.email
        })
        setEditClick(true);
        setEditIndex(idx);
    }

    const Remove = (idx) => {
        // console.log(tableData[idx])
        const Delete = (tableData.filter((x, id) => id !== idx));
        setTabledata(Delete);
    };

    return (
        <>
            <div className='crud'>

                <br />
                <h1 className='num-one'> 2nd : -</h1>
                <br />  
                <div className='box'>
                    <br />
                    <form className='form-control' onSubmit={handleSubmit}>
                        <label>NAME</label>
                        <input className='input' name='name' value={input.name} onChange={(e) => handleChange(e)} placeholder='Enter Name' required />
                        <label>E-MAIL</label>
                        <input className='input' name='email' value={input.email} onChange={(e) => handleChange(e)} placeholder='Enter Email' required/>
                        <br />
                        <button type='submit' className='btn'>
                            {editClick ? "UPDATE" : "ADD"}
                        </button>
                    </form>
                </div>
                <br />

                <br />
                <table className='table'>
                    <thead>
                        <tr className='head-row'>
                            <td><h2>NAME</h2></td>
                            <td><h2>E-MAIL</h2></td>
                            <td><h2>ACTIONS</h2></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((curr, idx) => {
                                return (
                                    <tr>
                                        <td>{curr.name}</td>
                                        <td>{curr.email}</td>
                                        <td>
                                            <button className='edit-btn' onClick={() => Edit(idx)}>EDIT</button>
                                            <button className='delete-btn' onClick={() => Remove(idx)}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br />
                <br />
            </div>
        </>
    )
}

export default Crud