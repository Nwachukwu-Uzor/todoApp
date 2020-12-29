import React from 'react';
import './TodoInput.css';

const todoInput = ({changed, clicked, todo}) => {
    const onSubmitHandler = event => {
        event.preventDefault();
        clicked()
    }
    return (
        <form onSubmit={(event) => onSubmitHandler(event)} className="todoInput">
            <input type="text" onChange={(event) => changed(event)} value={todo}/>
            <button>ADD TODO</button>
        </form>
    )
}

export default todoInput;