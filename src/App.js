// import logo from './logo.svg';
import "./App.css";
import Form from "./components/form";
import Todos from "./components/todos";

// const formDataWithNo = {math.random(),...}


const handleGetFormData = (formData) =>{
  console.log("Test")
console.log("App File",formData)
}

function App() {
  return (
    <>
    <Form getFormData = {handleGetFormData}/>
    <Todos/>
    </>
  );
}

export default App;
