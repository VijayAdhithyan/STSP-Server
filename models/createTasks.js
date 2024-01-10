import mongoose from "mongoose";

const newTasksSchema = mongoose.Schema({
  createdBy: { type: String, required: "task must have a creater name" },
  createrId: { type: String },
  taskTitle: { type: String, required: "task must have a task titlt" },
  taskDesc: {
    type: String,
    max: 500,
    required: "task must have a task desc",
  },
  createdOn: { type: Date, default: Date.now },
  submittedTasks: [
    {
      studentName: String,
      studentId: { type: String, required: true },
      frontEndURL: String,
      backEndURL: String,
      frontEndSourceCode: String,
      backEndSourceCode: String,
      submittedOn: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("tasks", newTasksSchema);
