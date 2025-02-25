import React, { useState, useEffect } from "react";
import { Container, Typography, Paper, CircularProgress } from "@mui/material";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Filter from "../components/Filter";

const API_URL = "http://localhost:5000/todos"; // Using JSON Server

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fetch todos from JSON Server
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, []);

  const addTodo = (text) => {  
    if (!text.trim()) {
      console.log("⚠️ Task is empty, not adding.");
      return;
    }
  
    const newTodo = { todo: text, completed: false };
  
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Successfully added task:", data);
        setTodos((prev) => [...prev, data]);
      })
      .catch((error) => console.error("❌ Error adding todo:", error));
  };
  
  

  const toggleTodo = (id, completed) => {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    })
      .then((res) => res.json())
      .then(() =>
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id === id ? { ...todo, completed: !completed } : todo
          )
        )
      )
      .catch((error) => console.error("Error updating todo:", error));
  };

  const deleteTodo = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setTodos((prev) => prev.filter((todo) => todo.id !== id)))
      .catch((error) => console.error("Error deleting todo:", error));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        To-Do List
      </Typography>
      <Paper style={{ padding: "16px" }}>
        <AddTodo addTodo={addTodo} />
        <Filter filter={filter} setFilter={setFilter} />
        {loading ? (
          <CircularProgress />
        ) : (
          <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )}
      </Paper>
    </Container>
  );
};

export default TodoApp;
