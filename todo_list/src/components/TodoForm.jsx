import React, { useState } from 'react';

const TodoForm = (props) => {

    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (input.length === 0) {
            return
        }
        props.newTodo({status: false, text: input});
        setInput('');
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type = 'text'
                onChange={e => setInput(e.target.value)}
                value = {input}
            />
            <button>Add</button>
        </form>
    );

}

export default TodoForm;