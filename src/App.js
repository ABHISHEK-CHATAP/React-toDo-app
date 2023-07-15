
import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  // console.log(input);

  const [todos, setTodos] = useState([]);
 
/* --------  ADD_TODO TODO  ----------- */

  const AddTodo = (input) => {
    // setTodos(input)
    (input === "") ? (alert("Write a Todo ... ?"))
    :
    (
       setTodos((x) => {
        return [...x, input]
      })
    )

      setInput("")
  }
  // console.log(todos);

 /* --------  REMOVE TODO  ----------- */

  const removetodo = (val) => {
    setTodos(todos.filter((x) => x !== val))
  }
  return (
    <>
 
    <div className='To_DO_DIV'>
    <h1 className='num-one'> 2nd : -</h1>
   
      <div className='app'>
        <div className='container gradient-border'>
          <h3 className='heading'>- :  TO DO List  : -</h3>
          <br />
          <div>
            <input className='input' value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Write a Todo ..' />
           <button className='glow-on-hover' onClick={() => AddTodo(input)}>ADD</button>
          </div>

          <br />
          <div>
            {
              todos.map((val) => {
                return <div className='list'>
                  <h4 className='list-name'>{val}</h4>
                  <button className='cross' onClick={() => removetodo(val)}>X</button>

                </div>
              })
            }
          </div>

        </div>
      </div>
    
      <br /><br /><br />
      </div>
      
    </>
  );
}

export default App;
