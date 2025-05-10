import { Router } from 'express';
import { createExpense, getExpenses } from '../controllers/expenseContoller';

export const expenseRoutes = Router();
expenseRoutes.post('/', createExpense);
expenseRoutes.get('/', getExpenses);

