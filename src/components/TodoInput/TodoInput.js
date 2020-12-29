import React from 'react';

const todoInput = ({changed, clicked, todo}) => {
    return (
        <div>
            <input type="text" onChange={(event) => changed(event)} value={todo}/>
            <button onClick={() => clicked()}>ADD TODO</button>
        </div>
    )
}

export default todoInput;