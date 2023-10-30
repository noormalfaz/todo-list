import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../redux/reducers/todo-reducers";
import { useState } from "react";

function ListTodo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const [editedTodo, setEditedTodo] = useState({ id: null, value: "" });
  const [checkedTodos, setCheckedTodos] = useState({});

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    if (editedTodo.id !== null) {
      dispatch(editTodo(editedTodo.id, editedTodo.value));
      setEditedTodo({ id: null, value: "" });
    }
  };

  const handleToggleStatus = (id) => {
    const updateCheckedTodos = { ...checkedTodos };
    updateCheckedTodos[id] = !updateCheckedTodos[id];
    setCheckedTodos(updateCheckedTodos);
  };

  return (
    <div className="justify-center items-center flex flex-col m-7 gap-5">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-[100%] flex justify-between p-2.5 border border-sky-500 rounded-[12px] max-[290px]:flex-col max-[290px]:items-center"
        >
          <div>
            <span
              onClick={() => handleToggleStatus(todo.id)}
              className={checkedTodos[todo.id] ? "line-through" : ""}
            >
              <input
                type="checkbox"
                checked={checkedTodos[todo.id]}
                onChange={() => handleToggleStatus(todo.id)}
                className="mr-2"
              />
              {todo.id === editedTodo.id ? (
                <input
                  type="text"
                  value={editedTodo.value}
                  onChange={(event) =>
                    setEditedTodo({
                      id: editedTodo.id,
                      value: event.target.value,
                    })
                  }
                  className="max-[290px]:w-[100%]"
                />
              ) : (
                todo.value
              )}
            </span>
          </div>
          <div className="pl-20 max-[380px]:pl-0">
            {todo.id === editedTodo.id ? (
              <button
                onClick={handleEdit}
                className="pr-2 font-semibold text-sky-800"
              >
                Simpan
              </button>
            ) : (
              <button
                onClick={() =>
                  setEditedTodo({ id: todo.id, value: todo.value })
                }
                className="pr-2"
              >
                ✏️
              </button>
            )}
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTodo;