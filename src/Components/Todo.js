import React from 'react';
import useToggle from '../hooks/useToggle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Checkbox, ListItemSecondaryAction, IconButton, ListItem, ListItemText, Typography} from '@material-ui/core';
import EditTodoForm from './EditTodoForm';
import Colors from '../Constants/Colors';
import Fonts from '../Constants/Fonts';
const Todo = ({id, task, completed, removeTodo, toggleTodo, editTodo}) => {
    const [isEditing, setIsEditing] = useToggle(false);
    return (
        <ListItem style={{height: '64px'}}>
        {isEditing ? <EditTodoForm editTodo={editTodo} task={task} id={id} toggleEdit={setIsEditing}/> : 
        <>
        <Checkbox checked={completed} onClick={()=>toggleTodo(id)} style={{color: Colors.secondary}}/>
        <ListItemText style={{textDecoration: completed ? 'line-through': 'none'}} primary={<Typography variant="h6" style={{ color: Colors.primary, fontFamily: Fonts.medium}}>{task}</Typography>}/>
        <ListItemSecondaryAction>
            <IconButton onClick={setIsEditing} style={{color: Colors.primary}} >
                <EditIcon/>
            </IconButton>
            <IconButton onClick={()=>removeTodo(id)} color="secondary">
                <DeleteIcon />
            </IconButton>
         </ListItemSecondaryAction>
         </>
        }
        </ListItem>
    )
}

export default Todo;