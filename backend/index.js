const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo, deleteTodo } = require("./types.js");
const { todo } = require("./db.js");
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      message: "Wrong input. Please re-enter inputs!",
    });
    return;
  }
  //put it in db now
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    message: "Todo created successfully!!",
  });
});
app.get("/viewTodo", async (req, res) => {
  const todos = await todo.find({}); //no condition will return the whole database !
  res.json({
    todos,
  });
});
app.put("/markDone", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = updateTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      message: "Wrong input. Please re-enter inputs!",
    });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    message: "Todo marked as completed!!",
  });
});
app.delete("/deleteTodo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = deleteTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      message: "it's over!!!",
    });
    return;
  }
  const result = await todo.deleteOne({
    _id: req.body.id,
  });
  if (result.deletedCount === 0) {
    res.json({
      message: "Todo not found",
    });
    return;
  }
  res.json({
    message: "Todo deleted :)",
  });
});
app.listen(3000, () => {
  console.log("server established !!");
});
