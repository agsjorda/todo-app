import React from "react";
import Todo from "./components/Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo task={todo.task} key={todo.id} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoList;
