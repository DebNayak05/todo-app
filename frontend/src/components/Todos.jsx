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
      {/* todos is an array which contains all todos. the main issue is now rendering that arrat */}
      {/* {todos.map( (todoItem) => {
            return <div key={todoItem._id} className="p-5">
                <h1>{todoItem.title}</h1>
                <h1>{todoItem.description}</h1>
                <button onClick={ () => {
                    fetch("http://localhost:3000/markDone", {
                        method:"PUT",
                        body: JSON.stringify({
                            id:todoItem._id
                        }),
                        headers: {
                            "Content-Type":"application/json"
                        }
                    })
                    
                }}>
                    { todoItem.completed ? "Completed!!" : "Mark as done"} 
                </button>
                <button onClick={ () => {
                    fetch("http://localhost:3000/deleteTodo", {
                        method:"DELETE",
                        body: JSON.stringify({
                            id:todoItem._id
                        }),
                        headers: {
                            "Content-Type":"application/json"
                        }
                    })
                    
                }}>
                    Delete
                </button>
            </div>
        }) } */}