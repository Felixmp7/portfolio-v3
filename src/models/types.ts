import { ProjectStatus } from "./enums";

/* eslint-disable no-unused-vars */
export type NavigationConfig = {
    home: string,
    about: string,
    projects: string,
    reviews: string,
    tests: string
}

export type Job = {
    id: number,
    createdAt: Date,
    enterpriseName: string,
    enterpriseLogo: string,
    charge: string,
    period: string,
}

export type TestResume = {
    id: number,
    createdAt: Date,
    enterpriseName: string;
    enterpriseLogo: string,
    position: string,
    date: string,
    context: string,
    deployLink: string,
    repositoryLink: string,
    hired: boolean
}

export type Project = {
    id: number
    createdAt: Date,
    logo: string,
    contributions: string,
    stack: string,
    images: string,
    enterpriseName: string,
    description: string,
    period: string,
    status: ProjectStatus,
    url: string,
    urlName: string,
}

export type Gender = "female" | "male"

export type Review = {
    id: number,
    createdAt: Date,
    fullName: string,
    gender: Gender,
    charge: string
    reviewText: string,
}
