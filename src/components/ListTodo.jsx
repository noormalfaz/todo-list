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
    <div className="justify-center items-center flex flex-col gap-5 m-7">
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between border w-80 p-2.5">
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
              />
            ) : (
              todo.value
            )}
          </span>
          <div>
            {todo.id === editedTodo.id ? (
              <button
                onClick={handleEdit}
                className="mr-2 font-semibold text-teal-600"
              >
                Simpan
              </button>
            ) : (
              <button
                onClick={() =>
                  setEditedTodo({ id: todo.id, value: todo.value })
                }
                className="mr-2"
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


// import { Link, NavLink } from "react-router-dom";

// function ListTodo() {
//   return (
//     <div className="flex gap-10 m-5 p-5 items-center">
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive
//             ? "bg-teal-500 text-white font-semibold px-3 pb-0.5 rounded-full"
//             : "bg-slate-500 text-white font-semibold px-3 pb-0.5 rounded-full"
//         }
//       >
//         All
//       </NavLink>
//       <NavLink
//         to="/active"
//         className={({ isActive }) =>
//           isActive
//             ? "bg-teal-500 text-white font-semibold px-3 pb-0.5 rounded-full"
//             : "bg-slate-500 text-white font-semibold px-3 pb-0.5 rounded-full"
//         }
//       >
//         Active
//       </NavLink>
//       <NavLink
//         to="/complete"
//         className={({ isActive }) =>
//           isActive
//             ? "bg-teal-500 text-white font-semibold px-3 pb-0.5 rounded-full"
//             : "bg-slate-500 text-white font-semibold px-3 pb-0.5 rounded-full"
//         }
//       >
//         Complete
//       </NavLink>
//     </div>
//   );
// }

// export default ListTodo;
