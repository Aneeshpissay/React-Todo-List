import { Grid, Paper } from '@material-ui/core';
import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import uuid from 'uuid';
import Fonts from '../Constants/Fonts';
import Colors from '../Constants/Colors';


const useStyles = makeStyles({
    root: {
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#FAFAFA'
    }
})

const TodoList = () => {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    const [todos, setTodos] = useState(initialTodos);
    useEffect(()=>{
        window.localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])
    const classes = useStyles();
    const addTodo = (task)=>{
        setTodos([...todos, {id: uuid(), task: task, completed: false}])
    }
    const removeTodo = (todoId)=>{
        const updatedTodos = todos.filter(todo=>todo.id!==todoId);
        setTodos(updatedTodos);
    }
    const toggleTodo = (todoId)=>{
        const updatedTodos = todos.map(todo=>
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updatedTodos);
    }
    const editTodo = (todoId, newTask)=>{
        const updatedTodos = todos.map(todo=>
            todo.id === todoId ? {...todo, task: newTask} : todo
        );
        setTodos(updatedTodos);
    }
    return (
       <Paper className={classes.root} elevation={0}>
            <AppBar position="static" style={{height: '64px', backgroundColor: Colors.primary}}>
            <Toolbar>
          <Typography color="inherit" style={{ fontFamily: Fonts.medium}}>
            TODO APP
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{marginTop: 20}}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo}/>
            {todos[0] && <TodoItem todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>}
          </Grid>
      </Grid>
       </Paper>
    )
}

export default TodoList;