import React from 'react'

export function Todo(props) {

    return (
        <div>
            <div className={props.item.completed ? 'complete' : ''}
                onClick={(event) => {
                event.preventDefault()
                props.handleComplete(props.item.id)
            }} > {props.item.todo} </div>
        </div>
    )
}