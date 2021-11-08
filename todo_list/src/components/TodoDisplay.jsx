import React from 'react';

const TodoDisplay = props => {

    const checkTodo = todo => {
        const copyTodo = props.newTodo.map(task => {
            if (task === todo) {
                task.status = !task.status;
            };
            return task;
        });
        props.setTodo(copyTodo);
    }

    const deleteTodo = todo => {
        const filterTodo = props.newTodo.filter(task => {
            if (task === todo && todo.status === true) {
                return task !== todo;
            }
            return task;
        });
        props.setTodo(filterTodo);
    }

    return (
        <div>
            <ul>
                {props.newTodo.map((todo, idx) => {
                    return (
                        <li
                            key = {idx}
                            style = {{textDecoration: todo.status
                                ? 'line-through'
                                : ''}}>
                            {todo.text}
                            <input checked = {todo.status} onChange = {() => checkTodo(todo)} type = 'checkbox'></input>
                            <button onClick = {() => deleteTodo(todo)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
    
}

export default TodoDisplay;