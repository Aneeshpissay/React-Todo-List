import React from 'react';
import { Paper, List, Divider} from '@material-ui/core';
import Todo from './Todo';

const TodoItem = ({todos, removeTodo, toggleTodo, editTodo}) => {
    return (
        <Paper>
            <List>
                {todos.map((todo, i)=>{
                    return (
                        <>
                            <Todo key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                            {i < todo.length && <Divider />}
                        </>
                    )
                })}
            </List>
        </Paper>
    )
}

export default TodoItem;