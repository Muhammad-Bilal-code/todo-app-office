import "./form.css"
import TextField from "@mui/material/TextField";
import * as React from "react";
import {useState} from "react"

import { Grid, styled, Paper, Button} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));





function Form(props) {

  const [input,setInput] = useState({title:"",desc:""})
  const handleChangeInput = (e) =>{
    setInput({...input,[e.target.name]:e.target.value})
  } 
  console.log(input)

    return (
      
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }} class="form-prnt">
          <Grid item xs={1.5}>
            
              <TextField
                id="standard-basic"
                label="Title"
                variant="outlined"
                value={input.title}
                name = "title"
                onChange={handleChangeInput}
                />
            
          </Grid>
          <Grid item xs={1.5}>
            
              <TextField
                id="standard-basic"
                label="Desc"
                variant="outlined"
                value={input.desc}
                name="desc"
                onChange={handleChangeInput}
              />
            
          </Grid>
          <Grid item xs={1}>
            
          <Button type = "submit" variant="contained" size="medium" onSubmit={(e)=>{e.preventDefault();props.getFormData(input)}}>Add</Button>
            
          </Grid>
        </Grid>
      
    );
  }

  export default Form