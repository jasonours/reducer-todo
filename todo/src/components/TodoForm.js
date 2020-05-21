import React, { useState } from 'react'

export function TodoForm (props) {
    const [form, setForm] = useState('')
   
    return(
    <form onSubmit={(event) => {
        event.preventDefault()
        props.addTodo(form)
        setForm('')
    }}>

        <input className="input"
            name='todo'
            placeholder='Add Todo'
            value={form}
            onChange={(event) => {
                setForm(event.target.value)
            }}
        />

        <button className="submitBtn" type='submit'>Add</button>
    </form>
   )
}