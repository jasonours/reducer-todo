import React, { useState } from 'react';

const Form = props => {
    const [task, setTask ] = useState('');

    const onChange = event => {
        setTask(event.target.value);
    }

    return (
        <div>
            <input
                value={task}
                type='text'
                onChange={onChange}
            />

            <button onClick={() => {
                props.dispatch({type: 'ADD_TODO', payload: task})
                setTask('');
                }}>
                    Add New TODO
            </button>

            <div>
                <button onClick={() => {
                    props.dispatch({type: 'CLEAR_COMPLETED'})
                    }}>
                        Clear Completed
                </button>
            </div>
        </div>
    )
}
export default Form;