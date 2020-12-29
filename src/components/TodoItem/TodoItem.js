import React from 'react';
import './TodoItem.css'

const todoItem = ({text, toggled, isToggled, deleted, id}) => {
    return (
        <div className="todoItem">
          <h5 style={{color: isToggled ? 'red' : 'green'}} className="todoText">{text}</h5>
          <button onClick={() => toggled(id)} className="toggle">TOGGLE TODO</button>
          <button onClick={() => deleted(id)} className="delete">DELETE TODO</button>
        </div>
    )
}

export default todoItem;