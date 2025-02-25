import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTodo(task);
    setTask("");
  };

  return (
    <Box display="flex" mb={2}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAdd} style={{ marginLeft: 10 }}>
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
