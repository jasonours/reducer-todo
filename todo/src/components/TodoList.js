import React from 'react'
import { Todo } from './Todo';

export function TodoList(props) {

    return (
        <div className="currentTask">
            {props.state.map((item) => {
                return <Todo item={item} key={item.id} handleComplete={props.handleComplete} />
            })}
        </div>
    )
}