import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write To do"
        className="w-full border border-gray-500 rounded-l-lg px-3 outline-none duration-150 bg-[#d9d9d9] py-1.5 text-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-[#cccccc] text-black shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
