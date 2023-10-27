import { Link, NavLink } from "react-router-dom";

function ListTodo() {
  return (
    <div className="flex gap-10 m-5 p-5 items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-teal-500 text-white font-semibold px-3 pb-0.5 rounded-full"
            : "bg-slate-500 text-white font-semibold px-3 pb-0.5 rounded-full"
        }
      >
        All
      </NavLink>
      <NavLink
        to="/active"
        className={({ isActive }) =>
          isActive
            ? "bg-teal-500 text-white font-semibold px-3 pb-0.5 rounded-full"
            : "bg-slate-500 text-white font-semibold px-3 pb-0.5 rounded-full"
        }
      >
        Active
      </NavLink>
      <NavLink
        to="/complete"
        className={({ isActive }) =>
          isActive
            ? "bg-teal-500 text-white font-semibold px-3 pb-0.5 rounded-full"
            : "bg-slate-500 text-white font-semibold px-3 pb-0.5 rounded-full"
        }
      >
        Complete
      </NavLink>
    </div>
  );
}

export default ListTodo;
