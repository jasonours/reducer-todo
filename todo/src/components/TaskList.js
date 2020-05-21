import React from 'react';

import Task from './Task';

const TaskList = (props) => {
    console.log( props.state)

    return (
        <div>
            {props.state.map(task => <Task dispatch={props.dispatch} key={task.id} id={task.id} completed={task.completed} task={task.item} />)}
        </div>
    )
} 

export default TaskList;