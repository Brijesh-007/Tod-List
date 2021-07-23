import './App.css';
import Header from "./components/Header";
import React, {useState, useEffect} from "react";
import {Todos} from "./components/Todos"
import {AddTodo} from "./components/AddTodo";


function App() {
    let initTodo = [];
    if (localStorage.getItem("todos") !== null) {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const [todos, setTodos] = useState(initTodo);
    const [showAddtodo, setshowAddtodo] = useState(false);

    const onDelete = (todo) => {
        console.log('I am onDelete ', todo);
        // let index = todos.indexOf(todo);
        // todos.splice(index,1);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
        if (todos.length !== 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    const addTodo = (title, desc) => {
        console.log("Adding ", title, desc);
        let sno;
        if (todos.length === 0) {
            sno = 0;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const mytodo = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodos([...todos, mytodo]);

        localStorage.setItem("todos", JSON.stringify(todos));
        setshowAddtodo(false);
    }

    const ShowAddTodo = () => {
        setshowAddtodo(true);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <div>
            <Header title="Todo List" searchbar={true}/>
            <div className="text-center mt-2 mb-2 pb-0">
                <button className="btn btn-outline-success mx-auto" onClick={() => ShowAddTodo()}>Add Task
                </button>
            </div>
            {showAddtodo ? <AddTodo addTodo={addTodo}/> : ""}
            <Todos todos={todos} onDelete={onDelete}/>
        </div>
    );
}

export default App;