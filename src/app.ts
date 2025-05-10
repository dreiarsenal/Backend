import express from 'express';
import cors from 'cors';
import { categoryRoutes } from './routes/categoryRoutes';
import { expenseRoutes } from './routes/expenseRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/expense', expenseRoutes);



export default app; 
