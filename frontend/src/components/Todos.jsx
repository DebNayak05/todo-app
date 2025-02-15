import React from "react";
import TodoCard from "./TodoCard";
function Todos({ todos, onTodoUpdated }) {
  return (
    <>
      {todos.map((todoItem) => {
        return (
          <TodoCard
            key={todoItem._id}
            title={todoItem.title}
            description={todoItem.description}
            id={todoItem._id}
            completed={todoItem.completed}
            onTodoUpdated={onTodoUpdated}
          />
        );
      })}
    </>
  );
}
export default Todos;