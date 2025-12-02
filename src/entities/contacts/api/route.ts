import { NextResponse } from 'next/server';
import { prisma } from '@shared/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: {
                name: 'asc',
            },
        });

        return NextResponse.json(contacts, {
            headers: {
                'Cache-Control': 'no-store, must-revalidate',
            },
        });
    } catch (error) {
        console.error('Ошибка при получении контактов:', error);
        return NextResponse.json(
            { error: 'Не удалось загрузить контакты' },
            { status: 500 },
        );
    }
}

