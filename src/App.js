// import logo from './logo.svg';
import "./App.css";
import Form from "./components/form";
import Todos from "./components/todos";
import {useState} from "react"


// const formDataWithNo = {math.random(),...}





function App() {
  
  
  const[formDataArr,setFormDataArr] = useState([])
  // console.log(formDataArr)
  const handleGetFormData = (formData) =>{
    // console.log(formData)
    // console.log("Test")
    setFormDataArr([formData,...formDataArr])
    console.log(formDataArr)
  }
  
    const handleClearAll = ()=>{
      setFormDataArr([])
  }

  
  return (
    <>
    <Form getFormData = {handleGetFormData}/>
    <Todos formDataArr = {formDataArr} setFormDataArr = {setFormDataArr} clearAll = {handleClearAll}/>
    </>
  );
}

export default App;
