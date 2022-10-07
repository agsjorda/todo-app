import React from "react";

const Todo = ({ task, completed }) => {
  return (
    <div className="flex">
      <input className="mx-2" type="checkbox" checked={completed} />
      <div className="flex-1 text-center bg-white my-1 ">{task}</div>
    </div>
  );
};

export default Todo;
