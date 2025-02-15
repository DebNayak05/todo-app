import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
// import TodoCard from "./components/TodoCard";
function App() {
  const [todos, setTodos] = useState([]);
  const  fetchTodos = async () => {
    await fetch("http://localhost:3000/viewTodo")
      .then(async (res) => {
        res = await res.json();
        return res;
      })
      .then((res) => {
        setTodos(res.todos);
      })
      .catch(() => {
        console.log("server down");
      });
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <CreateTodo onTodoCreated={fetchTodos}/>
      <Todos todos = {todos} onTodoUpdated={fetchTodos} ></Todos>
    </>
  );
}

export default App;
