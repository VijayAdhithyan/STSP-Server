import newTasks from "../models/createTasks.js";
import mongoose from "mongoose";

export const postNewTask = async (req, res) => {
  const postNewTaskData = req.body;
  const postNewTask = new newTasks({ ...postNewTaskData });

  try {
    await postNewTask.save();
    res.status(200).json("posted a question sucessfully");
  } catch (error) {
    console.log(error);
    res.status(404).json("couldn't post answer");
  }
};

export const getAllTask = async (req, res) => {
  try {
    const taskList = await newTasks.find();
    res.status(200).json(taskList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
