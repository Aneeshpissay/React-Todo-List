import React from 'react';
import { Paper, TextField} from '@material-ui/core';
import useInputState from '../hooks/useInputState';
import Colors from '../Constants/Colors';
import Fonts from '../Constants/Fonts';
const TodoForm = ({addTodo}) => {
    const [value, handleChange, reset] = useInputState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(value);
        reset();
    }
    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <TextField value={value} onChange={handleChange} label="Add New Todo" margin="normal" fullWidth InputProps={{
                    style: { color: Colors.primary, fontFamily: Fonts.medium },
                    classes: {
                        notchedOutline: Colors.primary
                    }
                }} InputLabelProps={{
                    style: { color: Colors.primary, fontFamily: Fonts.medium },
                }} />
            </form>
        </Paper>
    )
}

export default TodoForm;