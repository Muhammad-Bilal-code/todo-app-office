import "./todos.css"
import ToDoItem from "./todoitem"
import Button from '@mui/material/Button';
import { useState } from "react";


function Todos(props){

        


        // const handleDelete = (key) =>{
        //     console.log("Bilal")
        //     props.setFormDataArr(props.formDataArr.filter((v,i)=> v.key !== key))
        //     // console.log(`my key ${key}`)
        //   }
        
        
    return (
        <div className="todos-prnt">
            <h2>ToDo List</ h2>
        {
            props.formDataArr.map((v,i)=><ToDoItem title = {v.title} desc = {v.desc} sNo = {++i}  delete = {()=>{props.delete(v.key)}}></ToDoItem>)
        }
        <Button variant="outlined" color="error" onClick={props.clearAll}>Clear All</Button>
        </div>
    )
}

export default Todos