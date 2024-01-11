import express from "express";
import { deleteUser, getAllUsers, getUserDetails, register, specialFunc, updateUser } from "../controllers/user.js";

const router=express.Router();

router.get("/all",getAllUsers);
router.post("/new",register);
router.get("/userid/special",specialFunc);
router.get("/userid/:id", getUserDetails);
router.put("/userid/:id", updateUser);
router.delete("/userid/:id", deleteUser);

export default router;