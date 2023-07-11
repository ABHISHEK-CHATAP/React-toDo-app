import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <div >
      <button onClick={()=>setIsAdding(true)}
      style={{marginLeft:80,padding:7, borderRadius:15, border:"3px solid blue"}}
      >ADD EMPLOYEES</button>
    </div>
  )
}

export default Header