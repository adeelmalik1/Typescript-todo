import React from 'react';
import { Todo } from './models';
interface props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo: React.FC<props> = ({ todos, todo, setTodos }) => {


    const handleDelete = (id: number) => {
        setTodos(todos.filter((item) => item.id !== id));
    };
    const handleComplete = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        )
    }

    return (
        <ul>
            <li key={todo.id}>
            <h3 style={todo.isDone ? { textDecoration: 'line-through' } : {}}>{todo.todo}</h3>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleComplete(todo.id)}>complete</button>
            </li>
        </ul>
    )
}

export default SingleTodo;