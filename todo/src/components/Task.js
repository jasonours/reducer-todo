import React from 'react';

const Task = (props) => {

    return (
        <div onClick={() => props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.id})}>
            {props.completed ? 
            <input checked type='checkbox' /> 
            : <input type='checkbox' />}
            {props.task}
        </div>
    )
}

export default Task;