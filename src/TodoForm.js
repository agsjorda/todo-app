import React from "react";
import useInputState from "./hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);
  }

  return (
    <div className="my-8">
      <h1>{value}</h1>
      <form onSubmit={handleSubmit}>
        <label>Todo Form</label>
        <input
          type="text"
          placeholder="New Todo"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TodoForm;
