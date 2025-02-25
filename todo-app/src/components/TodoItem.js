import React from "react";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <ListItemText
        primary={todo.todo}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      />
      <IconButton edge="end" color="error" onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
