import { NextResponse } from 'next/server';
import { prisma } from '@shared/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        const indexes = await prisma.index.findMany({
            orderBy: {
                year: 'desc',
            },
        });

        return NextResponse.json(indexes, {
            headers: {
                'Cache-Control': 'no-store, must-revalidate',
            },
        });
    } catch (error) {
        console.error('Ошибка при получении прессы:', error);
        return NextResponse.json(
            { error: 'Ошибка при получении прессы' },
            { status: 500 }
        );
    }
}