import express from "express";
import {
  staffSignup,
  studentSignup,
  studentLogin,
  staffLogin,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/signup/staff", staffSignup);
router.post("/signup/student", studentSignup);
router.post("/login/staff", staffLogin);
router.post("/login/student", studentLogin);

export default router;
