import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Checkbox } from "antd";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos(() => [
      ...todos,
      {
        id: Date.now(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };
  const toogleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1 className="title center">LETS DO SOMETHING!</h1>
      <TodoForm addTodo={addTodo} />
      <div className="TodoList ">
        {todos.map((todo, index) => (
          <Todo task={todo} key={index} toogleComplete={toogleComplete} />
        ))}
      </div>
    </div>
  );
};
