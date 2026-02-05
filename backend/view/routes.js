import express from "express";

import { addUser, loginUSer } from "../controller/userController.js";
import {
  addEmp,
  getAllEmployees,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployeeById,
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
router.get("/getEmployeeById/:id", authMiddleware, getEmployeeById);
router.delete("/deleteEmployeeById/:id", authMiddleware, deleteEmployeeById);
router.put("/updateEmployeeById/:id", authMiddleware, updateEmployeeById);

export default router;
