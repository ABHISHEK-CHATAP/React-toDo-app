import React,{useState} from 'react'
import "./Add.css"

const Add = ({employee,setEmployee,setIsAdding}) => {
const {FirstName,LastName,email,salary,date}=useState('')

const [inputs, setInputs]= useState([])

const handleChange=(e)=>{
  setInputs({...inputs,[e.target.name]:e.target.value})

}
const handleSubmit=(e)=>{
  e.preventDefault();
  // console.log(inputs)
  // setEmployee([...employee,inputs])
  // setIsAdding(false)


  // id ki value increment nhi ho rahi thi isliye above code is not applicable

  // const id = employee.length + 1;
  const newEmployee = {
    id:employee.length + 1,
    FirstName:inputs.FirstName,
    LastName:inputs.LastName,
    email:inputs.email,
    salary:inputs.salary,
    date:inputs.date
    }
  setEmployee([...employee,newEmployee])
  setIsAdding(false)
}

  return (
    <>
   <div className='Add-div'>
   <h3>ADD DATA</h3>
      <form onSubmit={handleSubmit} className='form-control'>
         <label>
          FirstName : 
          <input name='FirstName' value={FirstName} onChange={handleChange} required />
         </label>
         <label>
          LastName : 
          <input name='LastName' value={LastName} onChange={handleChange} required />
         </label>
         <label>
          E-Mail : 
          <input name='email' value={email} onChange={handleChange} required />
         </label>
         <label>
          Salary : 
          <input name='salary' value={salary} onChange={handleChange} required />
         </label>
         <label>
          Date : 
          <input name='date' type='date' value={date} onChange={handleChange}required  />
         </label>
         <button className='btn' type='submit'>ADD EMPLOYEE</button>
         <button className='btn' type='button' onClick={()=> setIsAdding(false)}>Cancel</button>
      </form>
   </div>
 <br/><br/>

 
 
 </>
  
  )
}

export default Add