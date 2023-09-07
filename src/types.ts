/* eslint-disable no-unused-vars */
export type TNavigationConfig = {
    home: string,
    about: string,
    projects: string,
    reviews: string,
    tests: string
}

export type TTestResume = {
    id: number,
    name: string;
    position: string,
    logo: string,
    date: string,
    context: string,
    description: string,
    deployLink: string,
    repositoryLink: string,
    wasHired: boolean
}

// eslint-disable-next-line no-shadow
export enum EProjectStatus {
    completed = 'completed',
    poc = 'poc',
}
export type TProject = {
    id: number
    logo: string,
    contributions: string,
    stack: string[],
    enterpriseName: string,
    description: string,
    status: EProjectStatus,
    link: string,
    urlName?: string,
}

export type TGender = "female" | "male"

export type TReview = {
    review: string[],
    gender: TGender,
    name: string,
    charge: string
}
