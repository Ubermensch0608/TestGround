import React from 'react'

const NewTodo = () => {
  return (
    <form>
        <label htmlFor='todo-for'>Add New Todo!</label>
        <input id='todo-for'/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default NewTodo