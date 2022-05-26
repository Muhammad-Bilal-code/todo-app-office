import "./todos.css"
import ToDoItem from "./todoitem"
import Button from '@mui/material/Button';


function Todos(props){

        const handleClearAll = ()=>{
                props.setFormDataArr([])
        }

    return (
        <div className="todos-prnt">
            <h2>ToDo List</ h2>
        {
            props.formDataArr.map((v,i)=><ToDoItem title = {v.title} desc = {v.desc} sNo = {i} ></ToDoItem>)
        }
        <Button variant="outlined" color="error" onClick={handleClearAll}>Clear All</Button>
        </div>
    )
}

export default Todos