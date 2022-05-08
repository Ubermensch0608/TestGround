import { useState } from 'react'

const NewTodo = ({onNewTodo}) => {
    const [charactor,setCharactor] = useState('')
    
    const inputChangeHandler = (e) => {
        const currentCharactor = e.target.value
        setCharactor(currentCharactor)
    }
 
const submitTodoHandler = (e) => {
e.preventDefault()
if(charactor.trim().length === 0 ) {
    return 
}
onNewTodo(charactor)
setCharactor('')
}

    return (
    <form onSubmit={submitTodoHandler}>
        <label htmlFor='todo-for'>Add New Todo!</label>
        <input id='todo-for' onChange={inputChangeHandler} value={charactor}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default NewTodo