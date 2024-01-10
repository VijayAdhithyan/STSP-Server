import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import staff from "../models/staffAuth.js";
import student from "../models/studentAuth.js";

export const staffSignup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existinguser = await staff.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "user already Exist" });
    }

    const hashpassword = await bcrypt.hash(password, 12);
    const newUser = await staff.create({
      name,
      email,
      password: hashpassword,
      role: "staff",
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

export const studentSignup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existinguser = await student.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "user already Exist" });
    }

    const hashpassword = await bcrypt.hash(password, 12);
    const newUser = await student.create({
      name,
      email,
      password: hashpassword,
      role: "student",
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

export const staffLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existinguser = await staff.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "user not Exist" });
    }

    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const studentLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existinguser = await student.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "user not Exist" });
    }

    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
