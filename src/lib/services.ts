import { prisma } from 'prisma/client';
import { TProject, TReview, TTestResume } from 'src/types';

export async function getReviews() {
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

export async function getProjects() {
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


export async function getChallenges() {
    try {
        const challenges = await prisma.test.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        return (challenges || []) as TTestResume[];
    } catch (error) {
        return [];
    }
}
