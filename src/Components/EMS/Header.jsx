import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <div >
      <button className='btn' onClick={()=>setIsAdding(true)}
      style={{marginLeft:80,borderRadius:30,padding:13}}
      >ADD EMPLOYEES</button>
    </div>
  )
}

export default Header