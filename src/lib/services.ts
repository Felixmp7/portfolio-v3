import { Experience, Project, Review } from '@prisma/client';
import { prisma } from 'prisma/client';

export async function getReviews() {
    try {
        const reviews = await prisma.review.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return (reviews || []) as Review[];
    } catch (error) {
        console.error('Failed to fetch reviews:', error);
        throw new Error('Could not fetch reviews.');
    }
}

export async function getExperiences(limit?: number) {
    try {
        const experiences = await prisma.experience.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: limit
        });
        return (experiences || []) as Experience[];
    } catch (error) {
        console.error('Failed to fetch experiences:', error);
        throw new Error('Could not fetch experiences.');
    }
}
export async function getProjects() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return (projects || []) as Project[];
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        throw new Error('Could not fetch projects.');
    }
}