import Task from "../models/createTasks.js";
import mongoose from "mongoose";

export const taskSubmit = async (req, res) => {
  const { id: _id } = req.params;
  const {
    studentName,
    studentId,
    frontEndURL,
    frontEndSourceCode,
    backEndURL,
    backEndSourceCode,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable");
  }
  try {
    const submittedTask = await Task.findByIdAndUpdate(_id, {
      $addToSet: {
        submittedTasks: [
          {
            studentName,
            studentId,
            frontEndURL,
            frontEndSourceCode,
            backEndURL,
            backEndSourceCode,
          },
        ],
      },
    });
    res.status(200).json(submittedTask);
  } catch (error) {
    res.status(400).json(error);
  }
};
