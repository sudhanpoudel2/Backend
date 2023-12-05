import { Router } from "express";
import { registerUser } from "../controllers/user.controller";

const router = Router();

router.route("/register").post(registerUser)   //localhost:8000/user/register
router.route("/login").post(login)             //localhost:8000/user/login

export default router;