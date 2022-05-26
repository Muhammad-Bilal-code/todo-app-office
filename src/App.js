// import logo from './logo.svg';
import "./App.css";
import Form from "./components/form";
import Todos from "./components/todos";
import {useState} from "react"


// const formDataWithNo = {math.random(),...}





function App() {

  const[formDataArr,setFormDataArr] = useState([])

  const handleGetFormData = (formData) =>{
    console.log("Test")
  setFormDataArr([...formDataArr,formData])
    console.log("App File",formData)
    console.log(formDataArr)
  }
  return (
    <>
    <Form getFormData = {handleGetFormData}/>
    <Todos formDataArr = {formDataArr} setFormDataArr = {setFormDataArr}/>
    </>
  );
}

export default App;
