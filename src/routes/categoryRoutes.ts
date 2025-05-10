import { Router } from 'express';
import { getCategories, createCategory } from '../controllers/categoryController';

export const categoryRoutes = Router();

categoryRoutes.get('/', getCategories);

categoryRoutes.post('/', createCategory);
