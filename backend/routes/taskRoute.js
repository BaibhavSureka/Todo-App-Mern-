import express from "express";
import {
  addTask,
  getTask,
  removeTask,
  markDone,
} from "../controllers/taskController.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/addTask", requireAuth, addTask);
router.get("/getTask", requireAuth, getTask);
router.delete("/removeTask/:id", requireAuth, removeTask); // Use DELETE method and include id in the route
router.put("/markDone/:id", requireAuth, markDone); // PUT method for markDone

export default router;
