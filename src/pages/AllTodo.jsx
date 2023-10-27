import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/reducers/todo-reducers";

function AllTodo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="justify-center items-center flex flex-col gap-5">
      {todos.length == 0
        ? ""
        : todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between border w-80 p-2.5"
            >
              <span>{todo.value}</span>
              <div>
                <button>✏️</button>
                <button onClick={() => handleDelete(todo.id)}>❌</button>
              </div>
            </div>
          ))}
    </div>
  );
}

export default AllTodo;
