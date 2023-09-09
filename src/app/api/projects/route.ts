import { prisma } from 'prisma/client';
import { TProject } from 'src/types';

export async function GET(idsVoided?: number[]) {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (idsVoided) {
            return projects.filter(({ id }) => !idsVoided.includes(id)) as TProject[];
        }
        return projects as TProject[];
    } catch (error) {
        return [];
    }
}
