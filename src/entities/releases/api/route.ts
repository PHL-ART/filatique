import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const releases = await prisma.release.findMany({
            include: {
                listenLinks: {
                    include: {
                        service: true
                    }
                },
            },
            orderBy: {
                dateReleased: 'desc',
            },
        });

        return NextResponse.json(releases);
    } catch (error) {
        console.error('Ошибка при получении релизов:', error);
        return NextResponse.json(
            { error: 'Ошибка при получении релизов' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}