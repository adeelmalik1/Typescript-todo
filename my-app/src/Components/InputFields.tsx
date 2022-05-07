import React from 'react';

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputFeild: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form className='todo-form'
            onSubmit={handleAdd}
        >
            <input
                type="text"
                placeholder='add todo..'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='input-field'>
                Add
            </button>
        </form>
    )
}

export default InputFeild;
