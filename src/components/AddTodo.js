import React, {useState} from 'react'

export const AddTodo = (props) => {
    let [title, setTitle] = useState();
    let [desc, setDesc] = useState();
    const onAdd = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Please fill both fields.")
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container border border-primary p-2'>
            <form onSubmit={onAdd}>
                <div className="form-group">
                    <label htmlFor="todoTitle">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"
                           id="todoTitle" aria-describedby="emailHelp"
                           placeholder="Add Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="todoDesc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control"
                           id="todoDesc" placeholder="Add description"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}