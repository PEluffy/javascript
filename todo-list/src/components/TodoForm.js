import React, { useState } from "react";
import { Form, Input, Button, Flex } from "antd";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value !== "") {
      addTodo(value);
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
          placeholder="what is the task today"
          size="small"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></Input>
        <Button type="primary" htmlType="submit">
          Add Task
        </Button>
      </Flex>
    </Form>
  );
};
