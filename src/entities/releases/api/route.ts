import { NextResponse } from 'next/server';
import { prisma } from '@shared/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

        return NextResponse.json(releases, {
            headers: {
                'Cache-Control': 'no-store, must-revalidate',
            },
        });
    } catch (error) {
        console.error('Ошибка при получении релизов:', error);
        return NextResponse.json(
            { error: 'Ошибка при получении релизов' },
            { status: 500 }
        );
    }
}