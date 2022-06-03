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
    setFormDataArr([...formDataArr,formData])
    console.log(formDataArr)
  }
  
    const handleClearAll = ()=>{
      setFormDataArr([])
  }

  const handleDelete = (key) =>{
        console.log("Bilal")
        setFormDataArr(formDataArr.filter((v,i)=> v.key !== key))
        // console.log(`my key ${key}`)
      }
  return (
    <>
    <Form getFormData = {handleGetFormData}/>
    <Todos formDataArr = {formDataArr} setFormDataArr = {setFormDataArr} clearAll = {handleClearAll} delete = {handleDelete}/>
    </>
  );
}

export default App;
