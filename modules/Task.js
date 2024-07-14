const mongoose = require("mongoose");

const TaskScema = new mongoose.Schema({
  title: String,
});

const Task = new mongoose.model("Task", TaskScema);

module.exports = Task;
