
import { useState } from 'react';
import './App.css';

function App() {
 
  const[input, setInput]= useState("");
// console.log(input);

const [todos, setTodos]= useState([]);

 const AddTodo= (input) =>{
    // setTodos(input)
    setTodos((x)=>{
      return [...x,input]
    })
    setInput("")
  }
// console.log(todos);

const removetodo = (val)=> {
  setTodos(todos.filter((x)=> x !== val))
}


  return (
   <>
     <div className='app'>
        <div className='container'>
          <h3 className='heading'>- :  TO DO List  : -</h3>
         
         <div>
          <input className='input' value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Write a Todo ..'/>
          <button className='btn' onClick={() => AddTodo(input)}>ADD</button>
         </div>
         <br/>
         <div>
          {
            todos.map((val)=>{
             return <div className='list'>
                <h4 className='list-name'>{val}</h4>
                <button className='button' onClick={()=>removetodo(val)}>X</button>
              </div>
            })
          }
         </div>
         
        </div>
     </div>
   </>
  );
}

export default App;
