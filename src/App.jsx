import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <>
      <section className="justify-center items-center flex flex-col">
        <InputTodo />
        <ListTodo />
      </section>
    </>
  );
}

export default App;
