import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSideBar, getmessage, sendMessage } from "../controllers/message.controller.js"

const router = express.Router();

router.get("/users", protectRoute, getUsersForSideBar);
router.get("/:idx", protectRoute, getmessage);
router.post("/send/:idx", protectRoute, sendMessage);

export default router;