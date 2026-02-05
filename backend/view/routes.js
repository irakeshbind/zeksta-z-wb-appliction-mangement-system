import express from "express";

import { addUser, loginUSer } from "../controller/userController.js";
import {
  addEmp,
  getAllEmployees,
  getEmployeeById,
  deleteEmployeeById,
  updateData
} from "../controller/addEmployees.js";

// middleware
import { authMiddleware } from "../middleware/checkAuth.js";
const router = express.Router();

// signup and login routes
router.post("/addUser", addUser);
router.post("/loginUSer", loginUSer);

// add employee routes
router.post("/addEmp", authMiddleware, addEmp);
router.get("/getAllEmployees", authMiddleware, getAllEmployees);
router.get("/getEmployeeById", getEmployeeById);
router.delete("/deleteEmployeeById", deleteEmployeeById);
router.put("/updateData", authMiddleware, updateData);

export default router;
