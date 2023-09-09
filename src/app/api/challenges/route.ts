import { prisma } from 'prisma/client';
import { TTestResume } from 'src/types';

export async function GET() {
    try {
        const challenges = await prisma.test.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        return challenges as TTestResume[];
    } catch (error) {
        return [];
    }
}
