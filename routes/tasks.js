import express from "express";
import { postNewTask, getAllTask } from "../controllers/postNewTask.js";
import { taskSubmit } from "../controllers/submitTask.js";

const router = express.Router();

router.post("/createTask", postNewTask);
router.patch("/taskSubmit/:id", taskSubmit);
router.get("/allTask", getAllTask);

export default router;
