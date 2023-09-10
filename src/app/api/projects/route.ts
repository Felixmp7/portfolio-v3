import { prisma } from 'prisma/client';
import { TProject } from 'src/types';

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        return (projects || []) as TProject[];
    } catch (error) {
        return [];
    }
}
