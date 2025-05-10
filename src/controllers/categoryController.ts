import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';

// Get all categories
export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error });
    }
};

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
    const { title, icon } = req.body;
     console.log('Received category data:', { title, icon })
    try {
        const category = await prisma.category.create({
            data: {
                title,
                icon,
            },
        });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: "Error creating category", error });
    }
};
