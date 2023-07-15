import React,{useState} from 'react'

const Edit = ({employees,setSelectedEmployee,setEmployee,setIsEdditing}) => {

  const {FirstName,LastName,email,salary,date}=useState('')

  const handleChange=(e)=>{}


  const handleSubmit=(e)=>{}
  return (
   <>
    <div className='Add-div'>
      <h3>EDIT DATA</h3>
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
         <button className='btn' type='submit'>UPDATE</button>
         <button className='btn' type='button' onClick={()=> setIsEdditing(false)}>Cancel</button>
      </form>
   </div>
 <br/><br/>
   </>
  )
}

export default Edit