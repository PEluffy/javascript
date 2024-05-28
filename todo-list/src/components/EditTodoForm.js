import React, { useState } from "react";
import { Form, Input, Button, Flex } from "antd";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value !== "") {
      editTodo(value, task.id);
      setValue("");
    }
  };
  return (
    <Form className="TodoForm" onFinish={handleSubmit}>
      <Flex justify="space-between" align="center">
        <Input
          value={value}
          type="text"
          className="todo-input"
          placeholder="Update task"
          size="small"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></Input>
        <Button type="primary" htmlType="submit">
          Update Task
        </Button>
      </Flex>
    </Form>
  );
};
