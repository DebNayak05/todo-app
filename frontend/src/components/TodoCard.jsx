import React from "react";
function TodoCard({ title = "Title", description = "Description", id, completed, onTodoUpdated }) {
  const deleteTodo = async () => {
    await fetch("http://localhost:3000/deleteTodo", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      onTodoUpdated();
    })
  }
  return (
    <div className="border-2 m-2 p-4 rounded-2xl flex items-center justify-between bg-[#DDF7E3] shadow-md transition hover:shadow-lg">
      {/* Delete Button */}
      <button
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded-xl transition hover:bg-red-600"
        onClick={deleteTodo}
      >
        Delete
      </button>

      {/* Task Details */}
      <div className="flex-1 mx-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Mark as Done Button */}
      <button
        className={`py-2 px-4 rounded-xl font-semibold text-white transition ${
          completed ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        }`}
        onClick={async () => {
          if (!completed) {
            await fetch("http://localhost:3000/markDone", {
              method: "PUT",
              body: JSON.stringify({ id }),
              headers: { "Content-Type": "application/json" },
            })
            .then(() => {
              onTodoUpdated();
            })
          }
        }}
        disabled={completed}
      >
        {completed ? "Completed" : "Mark as Done"}
      </button>
    </div>
  );
}

export default TodoCard;
