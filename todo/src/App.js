import React, { useReducer } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { initialState, reducer } from './reducers/reducers';
import "./styles.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Date.now()
    }
    console.log(initialState)
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList state={state} handleComplete={handleComplete} />
      <button onClick={(event) => {
        event.preventDefault()
        clearCompleted()
      }}>Clear Task</button>
    </div>
  );
}

export default App;