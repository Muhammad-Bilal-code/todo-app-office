import "./todos.css"
import ToDoItem from "./todoitem"
import Button from '@mui/material/Button';
import { useState } from "react";


function Todos(props){

        

        // const [deletedArr,setDeletedArr] = useState("test")
        // console.log(deletedArr)
        const handleDelete = () => {
            console.log("test")
            console.log(props.formDataArr)
        }
        
    return (
        <div className="todos-prnt">
            <h2>ToDo List</ h2>
        {
            props.formDataArr.map((v,i)=><ToDoItem title = {v.title} desc = {v.desc} sNo = {++i} delete = {handleDelete}></ToDoItem>)
        }
        <Button variant="outlined" color="error" onClick={props.clearAll}>Clear All</Button>
        </div>
    )
}

export default Todos