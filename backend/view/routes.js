import express from "express";

import { addUser, loginUSer } from "../controller/userController.js";

const router = express.Router();

router.post("/addUser", addUser);
router.post('/loginUSer', loginUSer)

export default router;
