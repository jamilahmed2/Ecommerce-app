import express from "express";
import { loginController, registerController, } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
router.post("/login", loginController);

// GET METHODS
router.get("/test", requireSignIn, isAdmin, (req, res) => res.send("Protected Route"));
export default router;