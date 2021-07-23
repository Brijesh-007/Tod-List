import React from 'react'
import {Todo} from "./Todo";

export const Todos = (props) => {
    return(
        <div className="container my-3 p-1">
            <h2 className="text-center border border-primary bg-info text-light rounded">Todos List</h2>
            {props.todos.length === 0 ? <p className="text-center">Whoa.. You have no task left &#128079;</p> :
                    props.todos.map((todo) => {
                            return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        }
                    )
            }
        </div>
    );
}