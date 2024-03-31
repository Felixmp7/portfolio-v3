import { prisma } from 'prisma/client';
import { Job, Project, Review, TestResume } from 'src/models/types';

export async function getReviews() {
    try {
        const reviews = await prisma.review.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return (reviews || []) as Review[];
    } catch (error) {
        return [];
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
        return [];
    }
}

export async function getJobs() {
    try {
        const jobs = await prisma.job.findMany({
            take: 5,
            orderBy: {
                createdAt: 'desc'
            }
        });
        return (jobs || []) as Job[];
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
        return (challenges || []) as TestResume[];
    } catch (error) {
        return [];
    }
}
