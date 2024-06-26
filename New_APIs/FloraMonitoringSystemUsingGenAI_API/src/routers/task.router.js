import express from "express";

import { getAllTasks, getTask, getTasksByuserId, getTasksByplantId, createNewTask, deleteTask, updateTask } from '../controllers/task.controller.js';
import { isLoggedIn, isOwner } from "../middleware/index.js";


const router = express.Router();

router.route('/getTasks').get(isLoggedIn, getAllTasks);
router.route('/getTask/:id').get(isLoggedIn, isOwner, getTask);
router.route('/getTasksByUserId/:id').get(isLoggedIn, isOwner, getTasksByuserId);
router.route('/createNewTask').post(isLoggedIn, createNewTask);
router.route('/deleteTask/:id').delete(isLoggedIn, deleteTask);

export default router;