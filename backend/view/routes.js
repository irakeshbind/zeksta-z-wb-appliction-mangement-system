import express from "express";

import { addUser, loginUSer } from "../controller/userController.js";
import {addEmp} from '../controller/addEmployees.js'

// middleware 
import { authMiddleware } from "../middleware/checkAuth.js";
const router = express.Router();

// signup and login routes
router.post("/addUser", addUser);
router.post('/loginUSer', loginUSer)

// add employee routes
router.post('/addEmp',authMiddleware,addEmp)

export default router;
