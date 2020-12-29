import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const todoList = ({todos, toggled, deleted}) => {
    const list = todos.map(todo => 
            <TodoItem 
                key={todo.id}
                isToggled={todo.isToggled}
                toggled={toggled}
                deleted={deleted}
                text={todo.text}
                id={todo.id}
            />
        )
    return (
      list
    )
}

export default todoList;