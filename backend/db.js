const mongoose = require('mongoose');
require('dotenv').config();
const apiKey = process.env.MONGODB_API_KEY
mongoose.connect(apiKey);
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo: todo
}