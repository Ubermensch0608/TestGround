import NewTodo from "components/Todo/NewTodo";
import { useState } from "react";

const DUMMY_TODOS = [
{
  id: 't1',
  todo: 'Learn Nest.js'
},
{
  id: 't2',
  todo: 'Buy a Coffee'
},
]

const App = () => {
const [todos, setTodos] = useState(DUMMY_TODOS)

const addNewTodoHandler = (newTodo) => {
   const todoTemplate = {
     id: Math.random(),
     todo: newTodo
   }
   setTodos(prevTodos=> [ todoTemplate , ...prevTodos ] )
}

  return (
    <>
      <NewTodo onNewTodo={addNewTodoHandler}/>
      <ul>
        {todos.map(todo=><li key={todo.id}>{todo.todo}</li>)}
      </ul>
 </>
  );
};

export default App;
