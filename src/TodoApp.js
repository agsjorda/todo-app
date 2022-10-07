import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const myTodos = [
    { id: 1, task: "Walk the FisH", completed: false },
    { id: 2, task: "Groom the Chicken", completed: true },
    { id: 3, task: "Feed the Plants", completed: false },
  ];

  const [todos, setTodos] = useState(myTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#8eca8e]">
      <div>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default TodoApp;
