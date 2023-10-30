import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducers";
import StyleFont from "./FontTodo.module.css"

function InputTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className={`${StyleFont.font}`}>
      <h1 className="p-5 text-2xl font-bold">What's the plan for today?</h1>
      <form className="flex flex-row justify-between max-[380px]:px-5">
        <input
          type="text"
          name="todo"
          placeholder="What to do"
          className="w-[80%] border px-2.5 py-1 rounded-lg"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          required
        />
        <button
          onClick={handleClick}
          className="px-2.5 py-1 bg-sky-700 text-white font-semibold border-none rounded-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
