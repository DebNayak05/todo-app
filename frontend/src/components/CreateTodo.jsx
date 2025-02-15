import React, { useRef, useState } from "react";
function CreateTodo({onTodoCreated}) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const addTodo = async () => {
    await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          // const json = await res.json();
          alert("Todo Added!!!");
          onTodoCreated();
        })
        .catch((err) => console.error("Error:", err));
  }
  return (
    <>
      <div className="flex flex-col items-center m-5 p-5 w-fit mx-auto bg-slate-100 rounded-xl">
        <input
          ref={titleRef}
          id="title"
          type="text"
          placeholder="title"
          className="p-2 m-2 border border-blue-300 rounded-lg"
        />
        <input
          ref={descriptionRef}
          type="text"
          placeholder="description"
          className="p-2 m-2 border border-blue-300 rounded-lg"
        />
        <button
          className="p-2 m-2 border border-blue-800 rounded-lg bg-blue-500 text-white"
          onClick={addTodo}
        >
          Add a todo
        </button>
      </div>
    </>
  );
}
export default CreateTodo;
