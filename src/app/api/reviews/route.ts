import { prisma } from 'prisma/client';
import { TReview } from 'src/types';

export async function GET() {
    try {
        const reviews = await prisma.review.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        return (reviews || []) as TReview[];
    } catch (error) {
        return [];
    }
}
