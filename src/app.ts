import express from 'express';
import cors from 'cors';
import { categoryRoutes } from './routes/categoryRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/categories', categoryRoutes);



export default app; 
