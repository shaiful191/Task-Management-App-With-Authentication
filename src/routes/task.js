import express from 'express'
import { deleteTask, getMyTask, newTask, updateTask } from '../controllers/task.js';
import { isAuthenticated } from '../middlewares/auth.js';

const taskRouter = express.Router();

taskRouter.post('/create', isAuthenticated, newTask);
taskRouter.get('/my', isAuthenticated, getMyTask);
taskRouter
  .route('/:id')
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default taskRouter;