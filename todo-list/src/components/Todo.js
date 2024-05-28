import React, { useCallback } from "react";
import { TodoForm } from "./TodoForm";
import { useState } from "react";
import { Flex } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Todo = ({ task, toogleComplete, deleteTodo, editTodo }) => {
  return (
    <Flex justify="space-between" align="center" className="Todo">
      <p
        onClick={() => toogleComplete(task.id)}
        className={`todoparagraph ${task.completed ? "linethrough" : ""}`}
      >
        {task.task}
      </p>
      <Flex className="fontsize18" gap="small">
        <EditOutlined onClick={() => editTodo(task.id)}></EditOutlined>
        <DeleteOutlined onClick={() => deleteTodo(task.id)}></DeleteOutlined>
      </Flex>
    </Flex>
  );
};
