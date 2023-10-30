import { Route, Routes } from "react-router-dom";
import InputTodo from "./components/InputTodo";
// import ActiveTodo from "./pages/ActiveTodo";
// import AllTodo from "./pages/AllTodo";
// import CompleteTodo from "./pages/CompleteTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <>
      <section className="justify-center items-center flex flex-col">
        <h1 className="p-5 text-2xl font-bold">What's the plan for today?</h1>
        <InputTodo />
        <ListTodo />
      </section>

      {/* <Routes>
        <Route path="/" element={<AllTodo />} />
        <Route path="/active" element={<ActiveTodo />} />
        <Route path="/complete" element={<CompleteTodo />} />
      </Routes> */}
    </>
  );
}

export default App;
