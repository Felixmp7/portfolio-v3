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