import express from "express";

//user  data routes   import
import { addUser, loginUSer } from "../controller/userController.js";

// empolyees data routes   import
import {
  addEmp,
  getAllEmployees,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployeeById,
} from "../controller/addEmployees.js";

// add content route import   bu it is not test api postman
import {
  AddContent,
  updateContentById,
  getContentById,
  deleteContentById,
} from "../controller/AddContent.js";

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

//  add content route
router.post("/AddContent", AddContent);
router.put("/ updateContentById", updateContentById);
router.get("/getContentById", getContentById);
router.get("/deleteContentById", deleteContentById);

export default router;
