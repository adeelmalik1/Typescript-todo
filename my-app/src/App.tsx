import React, {useState} from 'react';
import'./App.css';
import InputFeild from './Components/InputFields';
import TodoList from './Components/TodoLIst';
import { Todo } from './Components/models';

const App: React.FC = ()=> {
  const [todo, setTodo] = useState<string>(" ");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent)=> {
    e.preventDefault();
    
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo , isDone: false}])
      setTodo("")
    }
  }
  return(
    <div className='main'>
      <span>
        Todo List
      </span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;