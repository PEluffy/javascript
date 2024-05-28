import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Checkbox } from "antd";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { isEditable } from "@testing-library/user-event/dist/utils";

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
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toogleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1 className="title center">LETS DO SOMETHING!</h1>
      <TodoForm addTodo={addTodo} />
      <div className="TodoList ">
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}></EditTodoForm>
          ) : (
            <Todo
              task={todo}
              key={index}
              toogleComplete={toogleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </div>
  );
};
