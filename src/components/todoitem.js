import "./todoitem.css"
import {Button, Grid, styled, Paper, } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function ToDoItem(props){

    

    return (
        <>
        <Grid container spacing={2} className="todo-item-prnt">
        <Grid item xs={0.5}>
          <Item>01</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{props.title}</Item>
        </Grid>
        <Grid item xs={5}>
          <Item>{props.desc}</Item>
        </Grid>
        <Grid item xs={0.5}>
          <Button variant="contained" size="medium">Edit</Button>
        </Grid>
        <Grid item xs={0.5}>
          <Button variant="contained" size="medium">Delete</Button>
        </Grid>

      </Grid>
        </>
    )
}

export default ToDoItem