import "./todos.css"
import ToDoItem from "./todoitem"


function Todos(){
    return (
        <div className="todos-prnt">
            <h2>ToDo List</ h2>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        </div>
    )
}

export default Todos