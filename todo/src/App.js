import React, { useReducer } from 'react';
import './App.css';

import Form from './components/Form';
import TaskList from './components/TaskList';
import { simpleReducer, initialState } from './reducers/index'

function App() {

  const [state, dispatch] = useReducer(simpleReducer, initialState); 

  return (
    <div className="App">
      <header className="App-header">

        <TaskList dispatch={dispatch} state={state}/>

        <Form dispatch={dispatch} />

      </header>
    </div>
  );
}

export default App;