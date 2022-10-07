import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </div>
  );
};

export default TodoList;
