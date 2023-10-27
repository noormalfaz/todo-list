import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducers";

function InputTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <form className="w-80 flex flex-row justify-between">
      <input
        type="text"
        name="todo"
        placeholder="What to do"
        className="w-[80%] border px-2.5 py-1 rounded-lg"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={handleClick} className="px-2.5 py-1 bg-sky-700 text-white font-medium border-none rounded-lg">
        Add
      </button>
    </form>
  );
}

export default InputTodo;
