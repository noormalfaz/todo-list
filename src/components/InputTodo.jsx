function InputTodo() {
  return (
    <form className="w-80 flex flex-row justify-between">
      <input
        type="text"
        name="todo"
        placeholder="What to do"
        className="w-[80%] border px-2.5 py-1 rounded-lg"
      />
      <button className="px-2.5 py-1 bg-sky-700 text-white font-medium border-none rounded-lg">
        Add
      </button>
    </form>
  );
}

export default InputTodo;
