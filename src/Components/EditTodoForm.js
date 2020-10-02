import React from 'react';
import { TextField} from '@material-ui/core';
import useInputState from '../hooks/useInputState';
import Colors from '../Constants/Colors';
import Fonts from '../Constants/Fonts';
const EditTodoForm = ({editTodo, task, id, toggleEdit}) => {
    const [value, handleChange, reset] = useInputState(task);
    const handleSubmit = (e)=>{
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEdit();
    }
    return (
            <form onSubmit={(e)=>handleSubmit(e)} style={{marginLeft: '1rem', width: '50%'}}>
                <TextField value={value} onChange={handleChange} label="Edit Todo" margin="normal" fullWidth autoFocus InputProps={{
                    style: { color: Colors.primary, fontFamily: Fonts.medium },
                    classes: {
                        notchedOutline: Colors.primary
                    }
                }} InputLabelProps={{
                    style: { color: Colors.primary, fontFamily: Fonts.medium },
                }}/>
            </form>
    )
}

export default EditTodoForm;