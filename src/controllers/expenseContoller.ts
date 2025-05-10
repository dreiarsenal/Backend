import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';


export const createExpense = async (req: Request, res: Response) => {
    const { title, amount, categoryId } = req.body;
    console.log('Received expense data:', { title, amount, categoryId })
   
    if (!title || !amount || !categoryId) {
        return res.status(400).json({ message: "Title, amount, and categoryId are required" });
    }

    const categoryIdInt = parseInt(categoryId, 10);

    const categoryExists = await prisma.category.findUnique({
        where: { id: categoryIdInt },
    });

    if (!categoryExists) {
        return res.status(400).json({ message: "Category not found" });
    }

    try {
   
        const expense = await prisma.expense.create({
            data: {
                title,
                amount,
                categoryId: categoryIdInt,
            },
        });

        res.status(201).json(expense);
    } catch (error) {

        res.status(500).json({ message: "Error creating expense", error });
    }
};

export const getExpenses = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        if (id) {

            const expense = await prisma.expense.findUnique({
                where: { id: parseInt(id) },
            });

            if (!expense) {
                return res.status(404).json({ message: "Expense not found" });
            }

            return res.json(expense);
        } else {
            // Get all expenses
            const expenses = await prisma.expense.findMany();
            return res.json(expenses);
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching expenses", error });
    }
};
