import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const indexes = await prisma.index.findMany({
            orderBy: {
                year: 'desc',
            },
        });

        return NextResponse.json(indexes);
    } catch (error) {
        console.error('Ошибка при получении прессы:', error);
        return NextResponse.json(
            { error: 'Ошибка при получении прессы' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}