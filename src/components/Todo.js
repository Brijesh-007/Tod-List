import React from 'react'

export const Todo = (props) => {
    let style = {};
    return (
        <div className="list-group-item list-group-item-action list-group-item-success rounded p-1 mb-1" style={style}>
            <h4 className="font-weight-bold mb-0">{props.todo.title}</h4>
            <p className="text-muted">{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => props.onDelete(props.todo)}>Delete</button>

        </div>
    )
}